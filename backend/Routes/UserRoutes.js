const express = require("express");
const router = express.Router();
const backendFunc = require("../Controllers/Controllers");

//router.route("/").post(RegisterUser);

router.get("/", backendFunc.serverPage);
router.post("/register", backendFunc.RegisterUser);
router.post("/login", backendFunc.Login);
//router.route("/login").post(AuthUser);

module.exports = router;
