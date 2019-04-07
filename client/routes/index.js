const path = require("path");
const router = require("express").Router();
const apiRoute = require("./api");

router.use("/api", apiRoute);

router.use((req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;