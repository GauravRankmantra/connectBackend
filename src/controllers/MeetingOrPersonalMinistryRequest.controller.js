const MeetingOrPersonalMinistryRequest = require("../models/MeetingOrPersonalMinistryRequest.model");

// Get all meeting or personal ministry requests
exports.getMeetingOrPersonalMinistryRequests = async (req, res, next) => {
  try {
    const requests = await MeetingOrPersonalMinistryRequest.find().sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    next(error);
  }
};

// Create a new meeting or personal ministry request
exports.createMeetingOrPersonalMinistryRequest = async (req, res, next) => {
  try {
    const request = await MeetingOrPersonalMinistryRequest.create(req.body);
    res.status(201).json({ success: true, data: request });
  } catch (error) {
    next(error);
  }
};
