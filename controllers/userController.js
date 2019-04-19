const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.UserModel.find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.UserModel.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByAppt: function(req, res) {
        db.UserModel.findOne({ email: req.params.id })
        .populate("appointment")
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.json(err));
    },
    findByUser: function(req, res) {
        db.UserModel.findOne({email: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.UserModel.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Appt.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    // },
    // remove: function(req, res) {
    //     db.User.findById({ _id: req.params.id })
    //     .then(dbModel => dbModel.remove())
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    }
};
