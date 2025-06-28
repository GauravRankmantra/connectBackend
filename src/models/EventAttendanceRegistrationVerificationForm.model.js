const mongoose = require("mongoose");

const eventAttendanceRegistrationVerificationFormSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    streetAddress: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    dayPhone: { type: String },
    nightPhone: { type: String },
    email: { type: String, required: true },
    attendeeCount: { type: String },
    birthdayCelebration: { type: String },
    birthdayCount: { type: String },
    weddingAnniversary: { type: String },
    weddingAnniversaryCount: { type: String },
    spiritualBirthday: { type: String },
    spiritualBirthdayCount: { type: String },
    eventSelection: { type: String },
    customEvent: { type: String },
    termsAgreement: { type: Boolean },
    noCostEvents: { type: Boolean },
    signature: { type: String }, // Cloudinary URL
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "EventAttendanceRegistrationVerificationForm",
  eventAttendanceRegistrationVerificationFormSchema
);
