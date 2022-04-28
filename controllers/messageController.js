const Message = require("../models/messageModel");
const factory = require("./refactoryController");
const uploadFeature = require("../utils/uplodFeature");

const { uploadMedia, resizeAndSetBody } = uploadFeature(
  `message-${Math.trunc(Math.random() * 9999999)}-${Date.now()}.png`,
  "public/uploads/message/"
);

exports.uploadMedia = uploadMedia;
exports.resizeAndSetMessageMediaBody = resizeAndSetBody;

exports.addMessage = factory.addOne(Message);
exports.updateMessage = factory.updateOne(Message);
exports.deleteMessage = factory.deleteOne(Message);
exports.getAllMessages = factory.getALL(Message);
