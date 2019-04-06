const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    categories: {
            type: [String]
    },
    comments: {
        type: String
    }
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;