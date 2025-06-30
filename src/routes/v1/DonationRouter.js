const express = require("express");
const { APIContracts, APIControllers } = require("authorizenet");
const router = express.Router();

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
  setting.setSettingValue(JSON.stringify({
    showReceipt: false,
    url: "http://localhost:3000/donation-success",
    cancelUrl: "http://localhost:3000/donation-cancel"
  }));

  const request = new APIContracts.GetHostedPaymentPageRequest();
  request.setMerchantAuthentication(merchantAuthentication);
  request.setTransactionRequest(transactionRequest);
  request.setHostedPaymentSettings(new APIContracts.ArrayOfSetting([setting]));

  const controller = new APIControllers.GetHostedPaymentPageController(request.getJSON());

  controller.execute(() => {
    const response = new APIContracts.GetHostedPaymentPageResponse(controller.getResponse());
    if (response.getMessages().getResultCode() === APIContracts.MessageTypeEnum.OK) {
      res.json({ success: true, token: response.getToken() });
    } else {
      res.status(500).json({ success: false, message: response.getMessages().getMessage()[0].getText() });
    }
  });
});

module.exports = router;
