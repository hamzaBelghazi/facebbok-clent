const Follow = require("../models/followModel");
const factory = require("./refactoryController");
const AppError = require("../utils/appError");
exports.setFollowerId = function (req, res, next) {
  if (req.user) {
    req.body.follower = req.user.id;
  }
  next();
};

exports.checkFollowOwner = async function (req, res, next) {
  if (
    req.user.id !== (await Follow.findById(req.params.id)).follower.valueOf()
  ) {
    return next(
      new AppError("you don't have permission to perform this action", 400)
    );
  }
  next();
};

exports.addFollow = factory.addOne(Follow);
exports.deleteFollow = factory.deleteOne(Follow);
