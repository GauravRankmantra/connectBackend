const SpecialSacerdotalRequest = require("../models/SpecialSacerdotalRequest.model");

// Get all special sacerdotal requests
exports.getSpecialSacerdotalRequests = async (req, res, next) => {
  try {
    const requests = await SpecialSacerdotalRequest.find().sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    next(error);
  }
};

// Create a new special sacerdotal request
exports.createSpecialSacerdotalRequest = async (req, res, next) => {
  try {
    const request = await SpecialSacerdotalRequest.create(req.body);
    res.status(201).json({ success: true, data: request });
  } catch (error) {
    next(error);
  }
};
