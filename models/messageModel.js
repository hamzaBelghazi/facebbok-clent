const { Schema, model } = require("mongoose");

const messageSchema = Schema(
  {
    messageTxt: {
      type: String,
    },
    media: [String],
    messageFrom: {
      type: Schema.ObjectId,
      ref: "User",
      required: [true, "please provide your id"],
    },
    conversationId: {
      type: Schema.ObjectId,
      ref: "Conversation",
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

module.exports = model("Message", messageSchema);
