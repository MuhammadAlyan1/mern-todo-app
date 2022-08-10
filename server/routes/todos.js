const express = require('express');
const router = express.Router();
const {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todosController.js');

router.get('/', getAllTodos);

router.get('/:todoId', getTodo);

router.post('/', createTodo);

router.put('/:todoId', updateTodo);

router.delete('/:todoId', deleteTodo);

module.exports = router;
