const express = require("express");
const router = express.Router();
const partnerCardController = require("../../controllers/PartnerCard.controller");

// GET all partner cards
router.get("/", partnerCardController.getPartnerCards);

// POST a new partner card
router.post("/", partnerCardController.createPartnerCard);

module.exports = router;
