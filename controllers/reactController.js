const React = require("../models/reactModel");
const factory = require("./refactoryController");
const Post = require("../models/postModel");
const AppError = require("../utils/appError");

exports.addReact = factory.addOne(React);

// exports.deleteReact = async (req, res, next) => {
//   const { postId, reaction } = req.params;

//   const react = await React.findOne({ _id: req.params.id });
//   const post = await Post.findById(postId);

//   if (!react) return next(new AppError("doc was not deleted", 500));

//   switch (reaction) {
//     case "like":
//       await Post.findByIdAndUpdate(postId, {
//         likes: post.likes - 1,
//         likesQuantity: post.likesQuantity - 1,
//       });
//       break;
//     case "love":
//       await Post.findByIdAndUpdate(postId, {
//         loves: post.loves - 1,
//         likesQuantity: post.likesQuantity - 1,
//       });
//       break;
//     case "haha":
//       await Post.findByIdAndUpdate(postId, {
//         hahas: post.hahas - 1,
//       });
//       break;
//     case "care":
//       await Post.findByIdAndUpdate(postId, {
//         cares: post.cares - 1,
//       });
//       break;
//     case "sad":
//       await Post.findByIdAndUpdate(postId, {
//         sads: post.sads - 1,
//       });
//       break;

//     default:
//       break;
//   }
//   react.delete();

//   res.status(203).json({
//     status: "success",
//   });
// };
exports.deleteReact = factory.deleteOne(React);
exports.updatReact = factory.updateOne(React);
