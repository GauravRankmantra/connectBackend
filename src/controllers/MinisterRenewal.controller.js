const MinisterRenewal = require("../models/MinisterRenewal.model");

// Get all minister renewals
exports.getMinisterRenewals = async (req, res, next) => {
  try {
    const renewals = await MinisterRenewal.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: renewals });
  } catch (error) {
    next(error);
  }
};

// Create a new minister renewal
exports.createMinisterRenewal = async (req, res, next) => {
  try {
    const renewal = await MinisterRenewal.create(req.body);
    res.status(201).json({ success: true, data: renewal });
  } catch (error) {
    next(error);
  }
};
