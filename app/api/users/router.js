const express = require("express");
const router = express();
const { createCMSUser, getAllUsers } = require("./controller");
const { authenticatedUser } = require("../../middleware/auth");

router.post("/users", authenticatedUser, createCMSUser);
router.get("/users", authenticatedUser, getAllUsers);

module.exports = router;
