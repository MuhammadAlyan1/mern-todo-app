const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, 'Please enter username'],
    unique: [true, 'User already exists'],
  },
  password: {
    type: String,
    require: [true, 'Please enter password'],
  },
  listOfTodos: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model('User', UserShema);
