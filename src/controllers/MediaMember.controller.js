const MediaMember = require("../models/MediaMember.model");
const { uploadFile } = require("../services/cloudinary");

// Get all media members
exports.getMediaMembers = async (req, res, next) => {
  try {
    const members = await MediaMember.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: members });
  } catch (error) {
    next(error);
  }
};

// Create a new media member
exports.createMediaMember = async (req, res, next) => {
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
    const member = await MediaMember.create(memberData);
    res.status(201).json({ success: true, data: member });
  } catch (error) {
    next(error);
  }
};
