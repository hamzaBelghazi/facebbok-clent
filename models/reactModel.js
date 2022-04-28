const { Schema, model } = require("mongoose");
const Post = require("./postModel");

const reactSchema = Schema(
  {
    post: { type: Schema.ObjectId, ref: "Post" },
    author: { type: Schema.ObjectId, ref: "User" },
    reaction: {
      type: String,
      enum: ["like", "love", "care", "haha", "sad"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reactSchema.statics.calcAverageLikes = async function (postId, reaction) {
  const stats = await this.aggregate([
    {
      $match: { post: postId },
    },
    {
      $group: {
        _id: "$post",
        nLikes: { $sum: 1 },
      },
    },
  ]);
  // console.log(stats);
  if (stats.length > 0) {
    switch (reaction) {
      case "like":
        let lNum = (await Post.findById(postId)).likes || 0;
        await Post.findByIdAndUpdate(postId, {
          likes: lNum + 1,
          likesQuantity: stats[0].nLikes,
        });
        break;
      case "love":
        let loNum = (await Post.findById(postId)).loves || 0;
        await Post.findByIdAndUpdate(postId, {
          loves: loNum + 1,
          likesQuantity: stats[0].nLikes,
        });
        break;
      case "care":
        let careNum = (await Post.findById(postId)).cares || 0;
        await Post.findByIdAndUpdate(postId, {
          cares: careNum + 1,
          likesQuantity: stats[0].nLikes,
        });
        break;
      case "haha":
        let hahaNum = (await Post.findById(postId)).hahas || 0;

        await Post.findByIdAndUpdate(postId, {
          hahas: hahaNum + 1,
          likesQuantity: stats[0].nLikes,
        });
        break;
      case "sad":
        let sadNum = (await Post.findById(postId)).sads || 0;

        await Post.findByIdAndUpdate(postId, {
          sads: sadNum + 1,
          likesQuantity: stats[0].nLikes,
        });
        break;
      default:
        await Post.findByIdAndUpdate(postId, {
          likes: 0,
          loves: 0,
          cares: 0,
          hahas: 0,
          sads: 0,
          likesQuantity: 0,
        });
        break;
    }
  } else {
    await Post.findByIdAndUpdate(postId, {
      likesQuantity: 0,
    });
  }
};

reactSchema.post("save", function () {
  this.constructor.calcAverageLikes(this.post, this.reaction);
});

// reactSchema.pre(/^findOneAnd/, async function (next) {
//   const postId = this.post;
//   const reaction = this.reaction;
//   console.log(postId, reaction);
//   // const post = await Post.findById(postId);

//   // switch (reaction) {
//   //   case "like":
//   //     await Post.findByIdAndUpdate(postId, {
//   //       likes: post.likes - 1,
//   //       likesQuantity: post.likesQuantity - 1,
//   //     });
//   //     break;
//   //   case "love":
//   //     await Post.findByIdAndUpdate(postId, {
//   //       loves: post.loves - 1,
//   //       likesQuantity: post.likesQuantity - 1,
//   //     });
//   //     break;
//   //   case "haha":
//   //     await Post.findByIdAndUpdate(postId, {
//   //       hahas: post.hahas - 1,
//   //     });
//   //     break;
//   //   case "care":
//   //     await Post.findByIdAndUpdate(postId, {
//   //       cares: post.cares - 1,
//   //     });
//   //     break;
//   //   case "sad":
//   //     await Post.findByIdAndUpdate(postId, {
//   //       sads: post.sads - 1,
//   //     });
//   //     break;

//   //   default:
//   //     break;
//   // }
//   next();
// });

reactSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.clone().findOne();
  next();
});

reactSchema.post(/^findOneAnd/, async function () {
  await this.r.constructor.calcAverageLikes(this.r.post, this.r.reaction);
});

module.exports = model("React", reactSchema);
