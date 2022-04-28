const { Schema, model } = require("mongoose");

const commentSchema = Schema(
  {
    post: { type: Schema.ObjectId, ref: "Post" },
    author: { type: Schema.ObjectId, ref: "User" },
    commentText: { type: String },
    commentMedia: [{ type: String }],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = model("Comment", commentSchema);
