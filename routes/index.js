const path = require("path");
const router = require("express").Router();
const books = require("./images");

router.use("./images", router);

router.use((req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;