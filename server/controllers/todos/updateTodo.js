const Todos = require('../../db/model/todos.js');

// route: api/todos/
const updateTodo = async (req, res) => {
  const { todoId, contents, isCompleted } = req.body;

  if (!todoId || !contents || isCompleted === undefined) {
    return res
      .status(401)
      .json('Please provide id, todo contents, and todo status');
  }

  try {
    const selectedTodo = await Todos.findById(todoId);
    selectedTodo.contents = contents;
    selectedTodo.isCompleted = isCompleted;
    await selectedTodo.save();

    return res.status(200).json({ selectedTodo });
  } catch (error) {
    return res.status(401).json('Please provide todo contents and ID');
  }
};

module.exports = updateTodo;
