const MinisterCredential = require("../models/MinisterCredential.model");

// Get all minister credentials
exports.getMinisterCredentials = async (req, res, next) => {
  try {
    const credentials = await MinisterCredential.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: credentials });
  } catch (error) {
    next(error);
  }
};

// Create a new minister credential
exports.createMinisterCredential = async (req, res, next) => {
  try {
    const credential = await MinisterCredential.create(req.body);
    res.status(201).json({ success: true, data: credential });
  } catch (error) {
    next(error);
  }
};
