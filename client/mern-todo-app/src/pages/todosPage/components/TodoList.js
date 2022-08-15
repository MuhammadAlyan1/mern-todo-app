import { Box } from '@mui/system';
import React, { useEffect, useState, useContext } from 'react';
import getAllTodos from '../../../api/getAllTodos';
import { todoAppContext } from '../../../App';
import SingleTodo from './SingleTodo';
import { Navigate } from 'react-router-dom';

const TodoList = () => {
  const { state, dispatch } = useContext(todoAppContext);
  const { listOfTodos, userId } = state;

  useEffect(() => {
    getAllTodos({ userId, dispatch });
  }, []);

  return (
    <>
      {!state.userId && <Navigate to="/" />}
      <Box
        sx={{
          maxWidth: {
            xs: '400px',
            sm: '500px',
            md: '900px',
          },
          margin: 'auto',
        }}
      >
        {listOfTodos.map((todo) => (
          <SingleTodo key={todo._id} todo={todo} />
        ))}
      </Box>
    </>
  );
};

export default TodoList;
