const router = require("express").Router();
const followController = require("../controllers/followController");
const authController = require("../controllers/authController");

router.use(authController.protect);
router
  .route("/")
  .post(followController.setFollowerId, followController.addFollow);

router
  .route("/:id")
  .delete(followController.checkFollowOwner, followController.deleteFollow);

module.exports = router;
