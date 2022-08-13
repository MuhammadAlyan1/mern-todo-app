const bcrypt = require('bcrypt');
const User = require('../../db/model/users.js');

// route /user/register
const register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json('Please provide username and password');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });

    return res.status(201).json({ userId: newUser.id });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json('user already exists');
    }
    return res.status(400).json('Something went wrong');
  }
};

module.exports = register;
