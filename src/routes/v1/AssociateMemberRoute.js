const express = require("express");
const router = express.Router();
const associateMemberController = require("../../controllers/AssociateMember.controller");
const { upload } = require("../../middlewares/multer.middleware");

// GET all associate members
router.get("/", associateMemberController.getAssociateMembers);

// POST a new associate member with signature image upload
router.post(
  "/",
  upload.single("signature"),
  associateMemberController.createAssociateMember
);

module.exports = router;
