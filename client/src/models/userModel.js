const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

// user_id and id_token and email required for auth0
const userSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  nameFirst: {
    type: String
  },
  nameLast: {
    type: String
  },
  id_token: {
    type: String
  },
  appointment: {
    type: String
  },
  image: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  is_admin: {
    type: Boolean
  },
});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;
