const Todos = require('../db/model/todos.js');

// route: api/todos/
const getAllTodos = async (req, res) => {
  res.status(200).json('Get All todos');
};

// route: api/todos/:id
const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    return res.status(200).json(id);
  } catch (error) {
    return res.status(401).json('Please provide todo ID');
  }
};

// route: api/todos/
const createTodo = async (req, res) => {
  const { contents, isCompleted } = req.body;

  try {
    if (isCompleted === 'undefined') {
      const createdTodo = await Todos.create({ contents });

      return res.status(201).json(createdTodo);
    } else {
      const createdTodo = await Todos.create({ contents, isCompleted });

      return res.status(201).json(createdTodo);
    }
  } catch (error) {
    return res.status(401).json('Please provide todo contents and ID');
  }
};

// route: api/todos/:id
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { contents, isCompleted } = req.body;

  if (!id || !contents || isCompleted === undefined) {
    return res
      .status(401)
      .json('Please provide id, todo contents, and todo status');
  }

  try {
    const selectedTodo = await Todos.findOne({ id });
    selectedTodo.contents = contents;
    selectedTodo.isCompleted = isCompleted;
    await selectedTodo.save();

    return res.status(200).json({ selectedTodo });
  } catch (error) {
    return res.status(401).json('Please provide todo contents and ID');
  }
};

// route: api/todos/:id
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(401).json('Please provide ID');
  }

  try {
    const deletedTodo = await Todos.deleteOne({ id });

    return res.status(200).json({ deletedTodo });
  } catch (error) {
    return res.status(401).json('Please provide todo ID');
  }
};

module.exports = {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
