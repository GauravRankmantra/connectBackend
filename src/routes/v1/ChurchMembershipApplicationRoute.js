const express = require("express");
const router = express.Router();
const churchMembershipApplicationController = require("../../controllers/ChurchMembershipApplication.controller");
const { upload } = require("../../middlewares/multer.middleware");

// GET all church membership applications
router.get(
  "/",
  churchMembershipApplicationController.getChurchMembershipApplications
);

// POST a new church membership application with passport photo upload
router.post(
  "/",
  upload.single("passportPhoto"),
  churchMembershipApplicationController.createChurchMembershipApplication
);

module.exports = router;
