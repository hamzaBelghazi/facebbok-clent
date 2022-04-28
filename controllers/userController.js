const User = require("../models/userModel");
const factory = require("./refactoryController");
const uploadFeature = require("../utils/uplodFeature");

const { uploadMedia, resizeAndSetBody } = uploadFeature(
  `user-${Math.trunc(Math.random() * 9999999)}-${Date.now()}.png`,
  "public/uploads/user/"
);

exports.uploadMedia = uploadMedia;
exports.resizeAndSetUserMediaBody = resizeAndSetBody;

exports.addUser = factory.addOne(User);
exports.getUser = factory.getOne(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
exports.getAllUsers = factory.getALL(User);
