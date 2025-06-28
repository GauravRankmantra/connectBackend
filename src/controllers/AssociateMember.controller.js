const AssociateMember = require("../models/AssociateMember.model");
const { uploadFile } = require("../services/cloudinary");

// Get all associate members
exports.getAssociateMembers = async (req, res, next) => {
  try {
    const members = await AssociateMember.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: members });
  } catch (error) {
    next(error);
  }
};

// Create a new associate member
exports.createAssociateMember = async (req, res, next) => {
  try {
    let signatureUrl = undefined;
    if (req.file) {
      const result = await uploadFile(req.file.path, "image");
      signatureUrl = result.secure_url;
    }
    const memberData = {
      ...req.body,
      signature: signatureUrl,
    };
    const member = await AssociateMember.create(memberData);
    res.status(201).json({ success: true, data: member });
  } catch (error) {
    next(error);
  }
};
