const Todos = require('../../db/model/todos.js');
const User = require('../../db/model/users.js');

// route: api/todos/
const createTodo = async (req, res) => {
  const { userId, contents, isCompleted } = req.body;

  if (!userId) {
    return res.status(400).json('Please provide user id');
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json('User does not exist');
    }

    if (isCompleted === 'undefined') {
      const createdTodo = await Todos.create({ contents });
      user.listOfTodos = [...user.listOfTodos, createdTodo.id];
      await user.save();

      return res.status(201).json(createdTodo);
    } else {
      const createdTodo = await Todos.create({ contents, isCompleted });
      user.listOfTodos = [...user.listOfTodos, createdTodo.id];
      await user.save();
      return res.status(201).json(createdTodo);
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json('Please provide todo contents and ID');
  }
};

module.exports = createTodo;
