import React, { useContext } from 'react';
import AddTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

const TodosPage = () => {
  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
};

export default TodosPage;
