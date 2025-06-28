const express = require("express");
const router = express.Router();
const mediaMemberController = require("../../controllers/MediaMember.controller");
const { upload } = require("../../middlewares/multer.middleware");

// GET all media members
router.get("/", mediaMemberController.getMediaMembers);

// POST a new media member with signature image upload
router.post(
  "/",
  upload.single("signature"),
  mediaMemberController.createMediaMember
);

module.exports = router;
