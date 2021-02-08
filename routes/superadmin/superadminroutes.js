const express = require("express");
const { validateSigninRequest } = require("../../validators/validate");
const { validateSignupRequest } = require("../../validators/validate");
const { isRequestValidated } = require("../../validators/validate");
const router = express.Router();

const { signup, signin } = require("../../controller/superadmin/auth");
const { requireSignin } = require("../../middleware/verifyjwt");


//crud require
const { createUser } = require("../../controller/superadmin/createUser");
 const { readUser } = require("../../controller/superadmin/readUser");
 const { updateUser } = require("../../controller/superadmin/updateUser");
 const { deleteUser }= require("../../controller/superadmin/deleteUser");

// signup & signin routes...
router.post("/superadmin/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/superadmin/signin", validateSigninRequest, isRequestValidated, signin);

//CRUD routes....
router.post("/superadmin/createUser", requireSignin, createUser);
router.get("/superadmin/readUser", requireSignin, readUser);
router.patch("/superadmin/updateUser", requireSignin, updateUser);
router.delete("/superadmin/deleteUser", requireSignin, deleteUser);

// router.get("/superadmin", requireSignin, (req, res, next) => {
//     res.status(200).json(superadmin);
//   });

  module.exports = router ;