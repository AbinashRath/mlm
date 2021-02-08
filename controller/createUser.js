const user = require('../models/user');

exports. createUser = function (req, res, next) {
    const {name,email,password, age, roll, joiningDate, balance, id} =req.body;
    let __user = new user(
        {
            name,
            age,
            email,
            password,
            roll,
            joiningDate,
            balance,
            id
        }
    );

    __user
    .save()
    .then(() =>res.status(200).json({"msg": "user created succesfully"}) )
};