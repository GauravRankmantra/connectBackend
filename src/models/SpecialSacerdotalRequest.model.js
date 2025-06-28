const mongoose = require("mongoose");

const specialSacerdotalRequestSchema = new mongoose.Schema(
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
    othersParticipating: { type: String },
    briefDescription: { type: String },
    dateOfRequest: { type: String },
    yourAddress: { type: String },
    fullAddress: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    requestPurpose: { type: String },
    venue: { type: String },
    estimatedAttendance: { type: String },
    preparedToMeet: { type: String },
    budget: { type: String },
    details: { type: String },
    captcha: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "SpecialSacerdotalRequest",
  specialSacerdotalRequestSchema
);
