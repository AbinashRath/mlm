
const user = require("../models/user");
exports.deleteUser = function (req, res) {
  user.findByIdAndRemove(
    req.params.id,
    { $set: req.body },
    function (err, user) {
      if (err) return next(err);
      res.send("Deleted user details.");
    }
  );
};
