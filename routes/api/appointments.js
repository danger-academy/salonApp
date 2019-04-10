const router = require("express").Router();
const apptControl = require("../../controllers/apptController.js");

router.route("/")
    .get(apptControl.findAll)
    .post(apptControl.create);

router.route("/:id")
    .get(apptControl.findById)
    .put(apptControl.update)
    .delete(apptControl.remove);

module.exports = router;