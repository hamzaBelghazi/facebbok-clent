const router = require("express").Router();
const postController = require("../controllers/postController");

router
  .route("/")
  .post(
    postController.uploadMedia,
    postController.resizeAndSetPostMediaBody,
    postController.addPost
  )
  .get(postController.getAllPosts);

router
  .route("/:id")
  .patch(
    postController.uploadMedia,
    postController.resizeAndSetPostMediaBody,
    postController.updatePost
  )
  .delete(postController.deletePost);

module.exports = router;
