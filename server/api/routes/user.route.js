const router = require("express").Router();
const controller = require("../controllers/user.controller");
const passport = require("passport");

router.post("/register", controller.register);

router.post("/login", passport.authenticate("local"), controller.register);

module.exports = router;
