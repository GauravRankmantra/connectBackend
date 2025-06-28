const express = require("express");
const router = express.Router();
const benevolentRequestFormController = require("../../controllers/BenevolentRequestForm.controller");

// GET all benevolent request forms
router.get("/", benevolentRequestFormController.getBenevolentRequestForms);

// POST a new benevolent request form
router.post("/", benevolentRequestFormController.createBenevolentRequestForm);

module.exports = router;
