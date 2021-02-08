const user = require('../../models/user');
exports.updateUser = function (req, res) {
  user.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, user) {
      if (err) return next(err);
      res.send("Udpated  details.");
    }
  );
};
