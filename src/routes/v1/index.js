const express = require("express");
const router = express.Router();
const healthCheck = require("./healthCheckRoute.js");
const associateMemberRoute = require("./AssociateMemberRoute.js");
const mediaMemberRoute = require("./MediaMemberRoute.js");
const ministerCredentialRoute = require("./MinisterCredentialRoute.js");
const ministerRenewalRoute = require("./MinisterRenewalRoute.js");
const churchMembershipApplicationRoute = require("./ChurchMembershipApplicationRoute.js");
const specialSacerdotalRequestRoute = require("./SpecialSacerdotalRequestRoute.js");
const benevolentRequestFormRoute = require("./BenevolentRequestFormRoute.js");
const eventAttendanceRegistrationVerificationFormRoute = require("./EventAttendanceRegistrationVerificationFormRoute.js");
const meetingOrPersonalMinistryRequestRoute = require("./MeetingOrPersonalMinistryRequestRoute.js");
const partnerCardRoute = require("./PartnerCardRoute.js");

router.use("/health", healthCheck);
router.use("/associate-member", associateMemberRoute);
router.use("/media-member", mediaMemberRoute);
router.use("/minister-credential", ministerCredentialRoute);
router.use("/minister-renewal", ministerRenewalRoute);
router.use("/church-membership-application", churchMembershipApplicationRoute);
router.use("/special-sacerdotal-request", specialSacerdotalRequestRoute);
router.use("/benevolent-request-form", benevolentRequestFormRoute);
router.use(
  "/event-attendance-registration-verification-form",
  eventAttendanceRegistrationVerificationFormRoute
);
router.use(
  "/meeting-or-personal-ministry-request",
  meetingOrPersonalMinistryRequestRoute
);
router.use("/partner-card", partnerCardRoute);

module.exports = router;
