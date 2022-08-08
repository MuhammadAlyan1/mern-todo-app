const connectDB = require('./db/connection.js');
const todos = require('./routes/todos.js');
const express = require('express');
const { default: mongoose } = require('mongoose');
const { json } = require('express');
const app = express();
require('dotenv').config();

app.use(json());
app.use('/api/todos', todos);

connectDB(process.env.MONGO_URI);

mongoose.connection.once('open', () => {
  console.log('Database connected');
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
});
