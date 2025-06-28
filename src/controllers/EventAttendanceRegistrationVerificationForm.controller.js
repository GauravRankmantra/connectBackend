const EventAttendanceRegistrationVerificationForm = require("../models/EventAttendanceRegistrationVerificationForm.model");
const { uploadFile } = require("../services/cloudinary");

// Get all event attendance registration verification forms
exports.getEventAttendanceRegistrationVerificationForms = async (
  req,
  res,
  next
) => {
  try {
    const forms = await EventAttendanceRegistrationVerificationForm.find().sort(
      { createdAt: -1 }
    );
    res.status(200).json({ success: true, data: forms });
  } catch (error) {
    next(error);
  }
};

// Create a new event attendance registration verification form
exports.createEventAttendanceRegistrationVerificationForm = async (
  req,
  res,
  next
) => {
  try {
    let signatureUrl = undefined;
    if (req.file) {
      const result = await uploadFile(req.file.path, "image");
      signatureUrl = result.secure_url;
    }
    const formData = {
      ...req.body,
      signature: signatureUrl,
    };
    const form = await EventAttendanceRegistrationVerificationForm.create(
      formData
    );
    res.status(201).json({ success: true, data: form });
  } catch (error) {
    next(error);
  }
};
