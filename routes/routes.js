const express = require("express");
const { validateSigninRequest } = require("../validators/validate");
const { validateSignupRequest } = require("../validators/validate");
const { isRequestValidated } = require("../validators/validate");
const router = express.Router();

const { signup, signin } = require("../controller/auth");
const { requireSignin } = require("../middleware/verifyjwt");

const { response } = require("express");
const superadmin = require("../models/superadmin");

router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin);

// router.get("/superadmin", requireSignin, (req, res, next) => {
//     res.status(200).json(superadmin);
//   });

  module.exports = router ;