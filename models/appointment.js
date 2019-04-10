const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApptSchema = new Schema({
    date: {
        type: String,
        required: true
    // },
    // time: {
    //     type: String,
    //     required: true
    }
});

const Appt = mongoose.model("Appt", ApptSchema);

module.exports = Appt;