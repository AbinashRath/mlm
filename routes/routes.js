const express = require("express");
const { validateSigninRequest } = require("../validators/validate");
const { validateSignupRequest } = require("../validators/validate");
const { isRequestValidated } = require("../validators/validate");
const router = express.Router();

const { signup, signin } = require("../controller/auth");
const { requireSignin } = require("../middleware/verifyjwt");

const { response } = require("express");
const superadmin = require("../models/superadmin");

//crud require
const { createUser } = require("../controller/createUser");
 const { readUser } = require("../controller/readUser");
 const {updateUser} = require("../controller/updateUser");
 const {deleteUser} = require("../controller/deleteUser");

// signup & signin routes...
router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin);

//CRUD routes....
router.post("/createUser", requireSignin, createUser);
router.get("/:id", requireSignin, readUser);
router.patch('/:id/updateUser', requireSignin, updateUser);
router.delete("/:id/deleteUser", requireSignin, deleteUser);

// router.get("/superadmin", requireSignin, (req, res, next) => {
//     res.status(200).json(superadmin);
//   });

  module.exports = router ;