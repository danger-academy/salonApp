const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Image.find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Image.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Image.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    createAvatar: function(req, res) {
        db.Image.create(req.body)
        .then(dbModel => db.UserModel.findOneAndUpdate({ user_id: req.body.user_id }, { $set: { avatar: dbModel._id } }, {new: true}))
        .then(dbSuccess => res.json(dbSuccess))
        .catch(err => res.status(422).json(err));
    },
    // update: function(req, res) {
    //     db.Image.findOneAndUpdate({ _id: req.params.id }, req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    remove: function(req, res) {
        db.Image.findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};