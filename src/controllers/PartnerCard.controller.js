const PartnerCard = require("../models/PartnerCard.model");

// Get all partner cards
exports.getPartnerCards = async (req, res, next) => {
  try {
    const cards = await PartnerCard.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: cards });
  } catch (error) {
    next(error);
  }
};

// Create a new partner card
exports.createPartnerCard = async (req, res, next) => {
  try {
    const card = await PartnerCard.create(req.body);
    res.status(201).json({ success: true, data: card });
  } catch (error) {
    next(error);
  }
};
