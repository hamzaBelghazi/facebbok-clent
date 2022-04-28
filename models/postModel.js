const { Schema, model } = require("mongoose");

const PostSchema = Schema(
  {
    author: {
      type: Schema.ObjectId,
      ref: "User",
    },
    postText: {
      type: String,
    },
    media: [{ type: String }],
    likes: { type: Number },
    loves: { type: Number },
    cares: { type: Number },
    hahas: { type: Number },
    sads: { type: Number },
    likesQuantity: Number,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

PostSchema.virtual("comments", {
  ref: "Comment",
  foreignField: "post",
  localField: "_id",
});
PostSchema.virtual("reactions", {
  ref: "React",
  foreignField: "post",
  localField: "_id",
});

module.exports = model("Post", PostSchema);
