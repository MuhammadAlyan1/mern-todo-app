const Todos = require('../../db/model/todos.js');

// route: api/todos/:id
const getTodo = async (req, res) => {
  const { todoId } = req.params;

  try {
    const selectedTodo = await Todos.findById(todoId);

    return res.status(200).json(selectedTodo);
  } catch (error) {
    return res.status(401).json('Please provide todo ID');
  }
};

module.exports = getTodo;
