const Todos = require('../../db/model/todos.js');
const User = require('../../db/model/users.js');

// route: api/todos/
const getAllTodos = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json('Please provide user id');
  }

  try {
    const user = await User.findById(userId);
    const userTodos = [];

    for (let i = 0; i < user.listOfTodos.length; i++) {
      const id = user.listOfTodos[i];
      const todo = await Todos.findById(id);
      userTodos.push(todo);
    }

    return res.status(200).json(userTodos);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = getAllTodos;
