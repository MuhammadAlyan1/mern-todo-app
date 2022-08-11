const Todos = require('../../db/model/todos.js');

// route: api/todos/:id
const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const { contents, isCompleted } = req.body;

  if (!todoId || !contents || isCompleted === undefined) {
    return res
      .status(401)
      .json('Please provide id, todo contents, and todo status');
  }

  try {
    const selectedTodo = await Todos.findOne({ todoId });
    selectedTodo.contents = contents;
    selectedTodo.isCompleted = isCompleted;
    await selectedTodo.save();

    return res.status(200).json({ selectedTodo });
  } catch (error) {
    return res.status(401).json('Please provide todo contents and ID');
  }
};

module.exports = updateTodo;
