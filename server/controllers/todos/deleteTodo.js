const Todos = require('../../db/model/todos.js');
const User = require('../../db/model/users.js');

// route: api/todos/
const deleteTodo = async (req, res) => {
  const { todoId, userId } = req.body;

  if (!userId || !todoId) {
    return res.status(401).json('Please provide user id and todo id');
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json('User does not exist');
    }

    const deletedTodo = await Todos.deleteOne({ todoId });
    user.listOfTodos = user.listOfTodos.filter((todo) => todo.id !== todoId);

    return res.status(200).json({ deletedTodo });
  } catch (error) {
    return res.status(401).json('Please provide todo ID');
  }
};

module.exports = deleteTodo;
