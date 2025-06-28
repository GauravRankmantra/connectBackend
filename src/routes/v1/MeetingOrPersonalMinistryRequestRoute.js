const express = require("express");
const router = express.Router();
const meetingOrPersonalMinistryRequestController = require("../../controllers/MeetingOrPersonalMinistryRequest.controller");

// GET all meeting or personal ministry requests
router.get(
  "/",
  meetingOrPersonalMinistryRequestController.getMeetingOrPersonalMinistryRequests
);

// POST a new meeting or personal ministry request
router.post(
  "/",
  meetingOrPersonalMinistryRequestController.createMeetingOrPersonalMinistryRequest
);

module.exports = router;
