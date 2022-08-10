const bcrypt = require('bcrypt');
const User = require('../db/model/users.js');

// router /user/login
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json('Please provide username and password');
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json('User does not exist');
    }

    const userId = user.id;
    const hashedPassword = user.password;
    const isCorrectPassword = bcrypt.compare(password, hashedPassword);

    if (!isCorrectPassword) {
      return res.status(401).json('Incorrect password');
    }

    return res.status(200).json({ userId });
  } catch (error) {
    console.log(error);
    return res.status(400).json('Something went wrong');
  }
};

// route /user/signup
const signup = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json('Please provide username and password');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });

    return res.status(201).json('user created');
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json('user already exists');
    }
    return res.status(400).json('Something went wrong');
  }
};

module.exports = { login, signup };
