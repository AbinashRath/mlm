const __superadmin = require("../models/superadmin")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/createjwt");

const signup = (req, res, next) => {
  let { name, email, password, roll,  joiningDate, balance, id} = req.body;
  __superadmin.findOne({ email: email })
    .then((superadmin) => {
      if (superadmin) {
        return res
          .status(422)
          .json({ errors: [{ superadmin: "email already exists" }] });
      } else {
        const saltRounds = 10;
        bcrypt
          .hash(password, saltRounds)
          .then((passwordHash) => {
            let _superadmin = new __superadmin({
              name,
              email,
              password: passwordHash,
              roll,
              joiningDate,
              balance,
              id
            });
            _superadmin
              .save()
              .then((newSuperadmin) => {
                return res.status(201).json(newSuperadmin);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: "Something went wrong" }],
      });
    });
};

const signin = (req, res,next) => {
  let { email, password } = req.body;
  __superadmin.findOne({ email })
    .then((superadmin) => {
      if (superadmin) {
        const passwordCorrect = bcrypt
          .compare(password, superadmin.password)
          .then((passwordCorrect) => {
            if (passwordCorrect) {
              let access_token = createJWT(superadmin.email, superadmin.id, 7200);
              return res.status(200).json({
                success: true,
                superadmin: superadmin.id,
                token: access_token,
              });
            } else {
              return res.status(403).json({
                error: "Incorrect password",
              });
            }
          })
          .catch((err) => console.log(err));
      } else {
        return res.status(404).json({
          errors: [{ superadmin: "not found" }],
        });
      }
    })
    .catch((err) => console.log(err));
};


module.exports = {
  signup,
  signin,
};
