const mongoose = require("mongoose");

const mediaMemberSchema = new mongoose.Schema(
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
    church: { type: String, required: true },
    address: { type: String, required: true },
    website: { type: String },
    denomination: { type: String },
    position: { type: String },
    mediaDepartment: { type: String },
    mediaDirector: { type: String },
    preferredPlatform: { type: String },
    contentCreator: { type: String },
    broadcastBefore: { type: String },
    mediaCompany: { type: String },
    demo: { type: String },
    broadcastingStandards: { type: String },
    message: { type: String },
    signature: { type: String }, // Cloudinary URL
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MediaMember", mediaMemberSchema);
