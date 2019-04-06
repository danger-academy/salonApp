const path = require("path");
const router = require("express").Router();
const imageRoutes = require("./images");

router.use("/images", imageRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
});

module.exports = router;