const { Schema, model } = require("mongoose");

const conversationSchema = Schema(
  {
    members: [String],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = model("Conversation", conversationSchema);
