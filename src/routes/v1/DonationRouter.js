const express = require("express");
const { APIContracts, APIControllers } = require("authorizenet");
const router = express.Router();
const nodemailer = require("nodemailer");

const API_LOGIN_ID = process.env.API_LOGIN_ID;
const TRANSACTION_KEY = process.env.TRANSACTION_KEY;

router.post("/get-donation-token", async (req, res) => {
  const { amount } = req.body;

  const merchantAuthentication = new APIContracts.MerchantAuthenticationType();
  merchantAuthentication.setName(API_LOGIN_ID);
  merchantAuthentication.setTransactionKey(TRANSACTION_KEY);

  const transactionRequest = new APIContracts.TransactionRequestType();
  transactionRequest.setTransactionType("authCaptureTransaction");
  transactionRequest.setAmount(parseFloat(amount));

  const setting = new APIContracts.SettingType();
  setting.setSettingName("hostedPaymentReturnOptions");
  setting.setSettingValue(
    JSON.stringify({
      showReceipt: false,
      url: "http://localhost:3000/donation-success",
      cancelUrl: "http://localhost:3000/donation-cancel",
    })
  );

  const request = new APIContracts.GetHostedPaymentPageRequest();
  request.setMerchantAuthentication(merchantAuthentication);
  request.setTransactionRequest(transactionRequest);
  request.setHostedPaymentSettings(new APIContracts.ArrayOfSetting([setting]));

  const controller = new APIControllers.GetHostedPaymentPageController(
    request.getJSON()
  );

  controller.execute(() => {
    const response = new APIContracts.GetHostedPaymentPageResponse(
      controller.getResponse()
    );
    if (
      response.getMessages().getResultCode() === APIContracts.MessageTypeEnum.OK
    ) {
      res.json({ success: true, token: response.getToken() });
    } else {
      res.status(500).json({
        success: false,
        message: response.getMessages().getMessage()[0].getText(),
      });
    }
  });
});

router.post("/send-thankyou", async (req, res) => {
  const { name, email, phone, amount } = req.body;

  if (!email || !name || !amount) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

const mailOptions = {
  from: `"connect with us ",<${process.env.MAIL_USER}>`,
  to: email,
  subject: "Thank You for Your Generous Donation",
  html: `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f8f8f8; margin: 0; padding: 0;">
      <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); overflow: hidden;">
        
        <div style="background-color: #4CAF50; color: #ffffff; padding: 30px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 600;">Thank You for Your Support!</h1>
        </div>
        
        <div style="padding: 30px; text-align: center;">
          <p style="margin-bottom: 15px; font-size: 16px;">Dear ${name},</p>
          <p style="margin-bottom: 15px; font-size: 16px;">We are incredibly grateful for your recent donation of <br><strong style="color: #4CAF50; font-size: 20px;">$${amount}</strong>.</p>
          <p style="margin-bottom: 15px; font-size: 16px;">Your generosity makes a real difference and helps us continue our vital work. We deeply appreciate your kindness and belief in our mission. 🙏</p>
          <p style="margin-bottom: 0; font-size: 16px;">With heartfelt thanks,</p>
          <p style="margin-top: 5px; font-size: 16px; font-weight: bold;">Connect With us</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eeeeee; margin: 25px 0;">
        
        <div style="background-color: #f2f2f2; color: #777777; padding: 20px; font-size: 14px; text-align: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
          <p style="margin: 5px 0;">If you have any questions, please don't hesitate to contact us.</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone || "N/A"}</p>
          </div>

      </div>
    </div>
  `,
};

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ success: false, message: "Email sending failed." });
  }
});

module.exports = router;
