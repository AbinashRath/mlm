const user = require('../models/user');


exports.readUser = function (req, res) {
    user.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};