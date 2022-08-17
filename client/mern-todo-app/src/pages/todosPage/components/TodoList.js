import { Box } from '@mui/system';
import React, { useEffect, useState, useContext } from 'react';
import getAllTodos from '../../../api/getAllTodos';
import { todoAppContext } from '../../../App';
import SingleTodo from './SingleTodo';
import { Navigate } from 'react-router-dom';
import LoadingTodos from './LoadingTodos';
import { Typography } from '@mui/material';

const TodoList = () => {
  const { state, dispatch } = useContext(todoAppContext);
  const { listOfTodos, userId } = state;

  const styles = {
    box: {
      maxWidth: {
        xs: '400px',
        sm: '500px',
        md: '900px',
      },
      margin: 'auto',
      marginTop: '50px',
      marginBottom: '50px',
    },
    typography: {
      color: '#eee',
      textAlign: 'center',
      marginBottom: '20px',
    },
  };

  useEffect(() => {
    getAllTodos({ userId, dispatch });
  }, []);

  return (
    <>
      {!state.userId && <Navigate to="mern-todo-app/" />}
      <Box sx={styles.box}>
        <Typography variant="h2" sx={styles.typography}>
          Tasks
        </Typography>
        {listOfTodos.map((todo) => (
          <SingleTodo key={todo._id} todo={todo} />
        ))}
        {state.isTodosLoading && <LoadingTodos />}
      </Box>
    </>
  );
};

export default TodoList;
