const router = require("express").Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.route("/auth/login").post(authController.login);
router.route("/auth/signup").post(authController.signup);
router.route("/auth/isLoggedIn").get(authController.isLoggedIn);

router.use(authController.protect);

router.route("/").get(userController.getAllUsers);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser);

module.exports = router;
