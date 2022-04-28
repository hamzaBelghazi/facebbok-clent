const Comment = require("../models/commentModel");
const factory = require("./refactoryController");
const uploadFeature = require("../utils/uplodFeature");

const { uploadMedia, resizeAndSetBody } = uploadFeature(
  `comment-${Math.trunc(Math.random() * 9999999)}-${Date.now()}.png`,
  "public/uploads/comment/"
);

exports.uploadMedia = uploadMedia;
exports.resizeAndSetCommentMediaBody = resizeAndSetBody;

exports.addComment = factory.addOne(Comment);
exports.updateComment = factory.updateOne(Comment);
exports.deleteComment = factory.deleteOne(Comment);
exports.getAllComments = factory.getALL(Comment);
