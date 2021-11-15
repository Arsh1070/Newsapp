const express = require("express");
const { RegisterUser, AuthUser } = require("../Controllers/Controllers");
const router = express.Router();
router.route("/").post(RegisterUser);
router.route("/login").post(AuthUser);

module.exports = router;
