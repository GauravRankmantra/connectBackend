const mongoose = require("mongoose");

const childSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  dateOfBirth: { type: Date },
  gender: { type: String },
  ethnicity: { type: String },
  school: { type: String },
  decision: [{ type: String }],
  interest: [{ type: String }],
  interests: [{ type: String }],
  alternateAddress: { type: String },
});

const partnerCardSchema = new mongoose.Schema(
  {
    todayDecided: { type: String },
    additionalDetails: { type: String },
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    lastNameLetter: { type: String },
    suffix: { type: String },
    gender: { type: String },
    ethnicity: { type: String },
    maritalStatus: { type: String },
    dob: { type: Date },
    email: { type: String, required: true },
    phone: { type: String },
    streetAddress: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    stateProvince: { type: String },
    postalCode: { type: String },
    country: { type: String },
    roles: [{ type: String }],
    hasChildren: { type: String },
    nextSteps: { type: String },
    howHeard: { type: String },
    otherHowHeard: { type: String },
    referrerName: { type: String },
    referrerPhone: { type: String },
    referrerEmail: { type: String },
    mailingList: { type: String },
    digitalSignature: { type: String },
    dateSigned: { type: String },
    contactPreference: [{ type: String }],
    mediaConsent: { type: Boolean },
    emergencyContactName: { type: String },
    emergencyContactPhone: { type: String },
    finalComments: { type: String },
    finalAgreement: { type: Boolean },
    children: [childSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PartnerCard", partnerCardSchema);
