const express = require("express");
const router = express();
const { signInUser, signUpUser } = require("./controller");

router.post("/auth/signin", signInUser);
router.post("/auth/signup", signUpUser);

module.exports = router;
