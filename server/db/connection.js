const mongoose = require('mongoose');

const connectDB = (uri) => {
  try {
    mongoose.connect(uri);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
