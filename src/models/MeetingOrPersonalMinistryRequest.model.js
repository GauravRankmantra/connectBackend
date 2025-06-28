const mongoose = require("mongoose");

const meetingOrPersonalMinistryRequestSchema = new mongoose.Schema(
  {
    code1: { type: String },
    code2: { type: String },
    url: { type: String },
    code3: { type: String },
    requestType: { type: String },
    contactName: { type: String },
    title: { type: String },
    contactPhone: { type: String },
    contactEmail: { type: String },
    organizationName: { type: String },
    organizationDescription: { type: String },
    sessionDateTime: { type: String },
    locationRequest: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    proposedRole: { type: String },
    topic: { type: String },
    participants: { type: String },
    refreshments: { type: String },
    referralSource: { type: String },
    purpose: { type: String },
    captcha: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "MeetingOrPersonalMinistryRequest",
  meetingOrPersonalMinistryRequestSchema
);
