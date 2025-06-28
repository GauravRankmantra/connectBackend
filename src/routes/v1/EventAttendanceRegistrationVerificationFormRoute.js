const express = require("express");
const router = express.Router();
const eventAttendanceRegistrationVerificationFormController = require("../../controllers/EventAttendanceRegistrationVerificationForm.controller");
const { upload } = require("../../middlewares/multer.middleware");

// GET all event attendance registration verification forms
router.get(
  "/",
  eventAttendanceRegistrationVerificationFormController.getEventAttendanceRegistrationVerificationForms
);

// POST a new event attendance registration verification form with signature image upload
router.post(
  "/",
  upload.single("signature"),
  eventAttendanceRegistrationVerificationFormController.createEventAttendanceRegistrationVerificationForm
);

module.exports = router;
