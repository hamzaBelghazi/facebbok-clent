const router = require("express").Router();
const reactController = require("../controllers/reactController");

router.route("/").post(reactController.addReact);

router
  .route("/:id")
  .patch(reactController.updatReact)
  .delete(reactController.deleteReact);

module.exports = router;
