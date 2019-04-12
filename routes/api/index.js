const path = require("path");
const router = require("express").Router();
const imageRoutes = require("./images");
const apptRoutes = require("./appointments");
const userRoutes = require("./user");

router.use("/images", imageRoutes);
router.use("/appt", apptRoutes);
router.use("/user", userRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
});

module.exports = router;