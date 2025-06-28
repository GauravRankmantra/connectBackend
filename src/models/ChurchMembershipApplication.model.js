const mongoose = require("mongoose");

const churchMembershipApplicationSchema = new mongoose.Schema(
  {
    applicationDate: { type: Date },
    passportPhoto: { type: String }, // Cloudinary URL
    applyingFor: [{ type: String }],
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date },
    gender: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    country: { type: String },
    mobilePhone: { type: String },
    email: { type: String, required: true },
    maritalStatus: { type: String },
    spouseName: { type: String },
    spouseDOB: { type: Date },
    anniversary: { type: Date },
    children: { type: String },
    childrenNamesAges: { type: String },
    previousChurch: { type: String },
    previousPastor: { type: String },
    reasonForLeaving: { type: String },
    saved: { type: String },
    salvationExperience: { type: String },
    baptized: { type: String },
    baptismLocation: { type: String },
    baptismDate: { type: Date },
    currentMinistry: { type: String },
    ministryDetails: { type: String },
    spiritualGifts: { type: String },
    skills: { type: String },
    expectations: { type: String },
    agreeStatement: { type: Boolean },
    signature: { type: String },
    signatureDate: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "ChurchMembershipApplication",
  churchMembershipApplicationSchema
);
