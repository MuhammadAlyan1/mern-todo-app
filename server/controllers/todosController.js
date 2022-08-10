const Todos = require('../db/model/todos.js');
const User = require('../db/model/users.js');

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

// route: api/todos/:id
const deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  const { userId } = req.body;

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

module.exports = {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
