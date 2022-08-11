const bcrypt = require('bcrypt');
const User = require('../../db/model/users.js');

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

module.exports = signup;
