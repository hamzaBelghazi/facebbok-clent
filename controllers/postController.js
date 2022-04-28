const Post = require("../models/postModel");
const factory = require("./refactoryController");
const uploadFeature = require("../utils/uplodFeature");

const { uploadMedia, resizeAndSetBody } = uploadFeature(
  `post-${Math.trunc(Math.random() * 9999999)}-${Date.now()}.png`,
  "public/uploads/post/"
);

exports.uploadMedia = uploadMedia;
exports.resizeAndSetPostMediaBody = resizeAndSetBody;

exports.addPost = factory.addOne(Post);
exports.updatePost = factory.updateOne(Post);
exports.deletePost = factory.deleteOne(Post);
exports.getAllPosts = factory.getALL(Post);
