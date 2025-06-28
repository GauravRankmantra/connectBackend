const express = require("express");
const router = express.Router();
const ministerCredentialController = require("../../controllers/MinisterCredential.controller");

// GET all minister credentials
router.get("/", ministerCredentialController.getMinisterCredentials);

// POST a new minister credential
router.post("/", ministerCredentialController.createMinisterCredential);

module.exports = router;
