const router = require("express").Router();
const conversationController = require("../controllers/conversationController");
const authController = require("../controllers/authController");

// this is for users actions

router.use(authController.protect);
router.route("/").post(conversationController.addConversation);
router.route("/:id/:member").patch(conversationController.deleteConversation);

// somthing for admin to manage

module.exports = router;
