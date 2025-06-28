// src/models/Business.js

const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A business must have a name."],
    },
    type: {
      type: String,
      required: [true, "A business must have a type."],
    },
    address: {
      type: String,
      required: [true, "A business must have an address."],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "A business must have a phone number."],
    },
    email: {
      type: String,

      lowercase: true,
      trim: true,
    },
    services: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
    },
    website: {
      type: String,
      trim: true,
    },
    hoursServices: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Business", businessSchema);
