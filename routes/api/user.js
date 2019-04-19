const router = require("express").Router();
const userControl = require("../../controllers/userController.js");

router.route("/")
    .get(userControl.findAll)
    .post(userControl.create);

router.route("/:id")
    .get(userControl.findById);
    // .put(userControl.update)
    // .delete(userControl.remove);

router.route("/find/:id")
    .get(userControl.findByUser);

    router.route("/appt/:id")
    .get(userControl.findByAppt);

module.exports = router;