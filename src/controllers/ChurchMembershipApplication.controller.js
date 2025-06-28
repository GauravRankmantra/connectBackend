const ChurchMembershipApplication = require("../models/ChurchMembershipApplication.model");
const { uploadFile } = require("../services/cloudinary");

// Get all church membership applications
exports.getChurchMembershipApplications = async (req, res, next) => {
  try {
    const applications = await ChurchMembershipApplication.find().sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, data: applications });
  } catch (error) {
    next(error);
  }
};

// Create a new church membership application
exports.createChurchMembershipApplication = async (req, res, next) => {
  try {
    let passportPhotoUrl = undefined;
    if (req.file) {
      const result = await uploadFile(req.file.path, "image");
      passportPhotoUrl = result.secure_url;
    }
    const applicationData = {
      ...req.body,
      passportPhoto: passportPhotoUrl,
    };
    const application = await ChurchMembershipApplication.create(
      applicationData
    );
    res.status(201).json({ success: true, data: application });
  } catch (error) {
    next(error);
  }
};
