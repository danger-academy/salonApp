const router = require("express").Router();
const imageControl = require("../../controllers/imageController.js");

router.route("/")
    .get(imageControl.findAll)
    .post(imageControl.create);

router.route("/:id")
    .get(imageControl.findById)
    // .put(imageControl.update)
    .delete(imageControl.remove);

module.exports = router;