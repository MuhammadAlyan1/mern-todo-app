const express = require('express');
const router = express.Router();
const getAllTodos = require('../controllers/todos/getAllTodos');
const getTodo = require('../controllers/todos/getTodo');
const createTodo = require('../controllers/todos/createTodo');
const updateTodo = require('../controllers/todos/updateTodo');
const deleteTodo = require('../controllers/todos/deleteTodo');

router.get('/:userId', getAllTodos);

router.get('/:todoId', getTodo);

router.post('/', createTodo);

router.put('/', updateTodo);

router.delete('/:todoId', deleteTodo);

module.exports = router;
