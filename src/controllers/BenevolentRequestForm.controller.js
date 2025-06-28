const BenevolentRequestForm = require("../models/BenevolentRequestForm.model");

// Get all benevolent request forms
exports.getBenevolentRequestForms = async (req, res, next) => {
  try {
    const forms = await BenevolentRequestForm.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: forms });
  } catch (error) {
    next(error);
  }
};

// Create a new benevolent request form
exports.createBenevolentRequestForm = async (req, res, next) => {
  try {
    const form = await BenevolentRequestForm.create(req.body);
    res.status(201).json({ success: true, data: form });
  } catch (error) {
    next(error);
  }
};
