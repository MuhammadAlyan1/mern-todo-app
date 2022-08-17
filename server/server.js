const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./db/connection.js');
const todos = require('./routes/todos.js');
const user = require('./routes/user.js');
const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const { json } = require('express');

app.use(cors());
app.use(json());
app.use('/api/todos', todos);
app.use('/user', user);

connectDB();

mongoose.connection.once('open', () => {
  console.log('Database connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
});
