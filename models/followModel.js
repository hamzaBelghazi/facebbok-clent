const { Schema, model } = require("mongoose");

const followSchela = Schema(
  {
    follower: {
      type: Schema.ObjectId,
      ref: "User",
    },
    followy: {
      type: Schema.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = model("Follow", followSchela);
