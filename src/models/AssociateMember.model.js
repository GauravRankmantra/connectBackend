const mongoose = require("mongoose");

const associateMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    streetAddress: { type: String, required: true },
    apartment: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    churchName: { type: String, required: true },
    churchAddress: { type: String, required: true },
    website: { type: String },
    denomination: { type: String },
    position: { type: String },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AssociateMember", associateMemberSchema);
