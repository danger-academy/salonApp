const db = require("../models");

module.exports = (app) => {
    app.post("/api/images", (req, res) => {
        db.Images.create(req.body)
        .then(dbModel => 
            res.json(dbModel),
            console.log(dbModel))
        .catch(err => res.status(422).json(err));
    });
}