const router = require("express").Router();
const messageController = require("../controllers/messageController");
const authController = require("../controllers/authController");

router.use(authController.protect);
router.route("/").post(messageController.addMessage);

router.route("/:id").delete(messageController.deleteMessage);

module.exports = router;
