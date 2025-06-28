const express = require("express");

const healthCheckController = require("../../controllers/healthCheckController.js");
const router = express.Router();

router.get("/", healthCheckController.healthCheck);

module.exports = router;