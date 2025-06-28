const mongoose = require("mongoose");

const ministerRenewalSchema = new mongoose.Schema(
  {
    currentTitle: { type: String },
    otherTitle: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mailingAddress: { type: String },
    apartment: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String },
    phone: { type: String },
    email: { type: String, required: true },
    agreement: { type: Boolean },
    electronicSignature: { type: String },
    signedBy: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MinisterRenewal", ministerRenewalSchema);
