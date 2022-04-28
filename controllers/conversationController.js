const Conversation = require("../models/conversationModel");
const factory = require("./refactoryController");
const catchError = require("../utils/catchError");
const AppError = require("../utils/appError");

// this will delete conversation for one member

exports.deleteConversation = catchError(async (req, res, next) => {
  const conversation = await Conversation.findById(req.params.id);
  if (!conversation) return next(new AppError("conversation not found!", 404));
  const membersArr = conversation.members.filter(
    (m) => m !== req.params.member
  );
  conversation.members = membersArr;
  conversation.save();
  res.status(200).json({
    status: "success",
    message: "conversation has been delete successfuly!",
  });
});

exports.addConversation = factory.addOne(Conversation);
exports.updateConversation = factory.updateOne(Conversation);
exports.deleteConversationPerm = factory.deleteOne(Conversation);
exports.getAllConversations = factory.getALL(Conversation);
