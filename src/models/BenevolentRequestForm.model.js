const mongoose = require("mongoose");

const benevolentRequestFormSchema = new mongoose.Schema(
  {
    code1: { type: String },
    code2: { type: String },
    url: { type: String },
    code3: { type: String },
    formTitle: { type: String },
    contactName: { type: String },
    title: { type: String },
    contactPhone: { type: String },
    contactEmail: { type: String },
    organizationName: { type: String },
    organizationDescription: { type: String },
    requestedAmount: { type: String },
    yourAddress: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    maritalStatus: { type: String },
    householdNumber: { type: String },
    sourcesApplied: { type: String },
    employmentStatus: { type: String },
    referralSource: { type: String },
    requestDetails: { type: String },
    captcha: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "BenevolentRequestForm",
  benevolentRequestFormSchema
);
