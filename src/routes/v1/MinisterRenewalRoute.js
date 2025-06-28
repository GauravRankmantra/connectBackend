const express = require("express");
const router = express.Router();
const ministerRenewalController = require("../../controllers/MinisterRenewal.controller");

// GET all minister renewals
router.get("/", ministerRenewalController.getMinisterRenewals);

// POST a new minister renewal
router.post("/", ministerRenewalController.createMinisterRenewal);

module.exports = router;
