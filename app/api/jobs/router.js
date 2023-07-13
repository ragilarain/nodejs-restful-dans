const express = require("express");
const router = express();
const { getJobsList, getJobById, getJobsFiltered } = require("./controller");
const { authenticatedUser } = require("../../middleware/auth");

router.get("/jobs", authenticatedUser, getJobsList);
router.get("/jobs/:id", authenticatedUser, getJobById);
router.get("/jobs/:search", authenticatedUser, getJobsFiltered);

module.exports = router;
