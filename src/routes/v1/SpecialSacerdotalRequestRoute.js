const express = require("express");
const router = express.Router();
const specialSacerdotalRequestController = require("../../controllers/SpecialSacerdotalRequest.controller");

// GET all special sacerdotal requests
router.get(
  "/",
  specialSacerdotalRequestController.getSpecialSacerdotalRequests
);

// POST a new special sacerdotal request
router.post(
  "/",
  specialSacerdotalRequestController.createSpecialSacerdotalRequest
);

module.exports = router;
