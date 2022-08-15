import React, { useState, useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Stack, IconButton, Tooltip, Typography } from '@mui/material';
import updateTodo from '../../../api/updateTodo';
import deleteTodo from '../../../api/deleteTodo';
import EditModal from './EditModal';
import { todoAppContext } from '../../../App';

const SingleTodo = ({ todo }) => {
  const { state, dispatch } = useContext(todoAppContext);
  const [isChecked, setIsChecked] = useState(false);
  const [isEditModalShowing, setIsEditModalShowing] = useState(false);

  const checkTodo = ({ contents, _id, isCompleted, dispatch }) => {
    setIsChecked(!isChecked);
    const data = {
      todoText: contents,
      todoId: _id,
      isCompleted: !isCompleted,
      dispatch,
    };
    updateTodo(data);
  };

  const HandleDeleteTodo = ({ userId, todoId, dispatch }) => {
    deleteTodo({ userId, todoId, dispatch });
  };
  // #373737
  const { _id, contents, isCompleted } = todo;
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          pt: '10px',
          backgroundColor: isChecked ? '#292929' : '#373737',
          mb: '20px',
          pb: '10px',
          borderRadius: '5px',
          opacity: 0.95,
        }}
      >
        <Checkbox
          onClick={() => checkTodo({ contents, _id, isCompleted, dispatch })}
        />
        <Typography
          component="p"
          variant="h6"
          sx={{
            color: '#eee',
            width: '100%',
            textDecoration: isChecked && 'line-through',
          }}
        >
          {contents}
        </Typography>
        <Tooltip title="Edit" placement="top">
          <IconButton onClick={() => setIsEditModalShowing(true)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" placement="top">
          <IconButton
            onClick={() =>
              HandleDeleteTodo({ userId: state.userId, todoId: _id, dispatch })
            }
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      {isEditModalShowing && (
        <EditModal
          isEditModalShowing={isEditModalShowing}
          setIsEditModalShowing={setIsEditModalShowing}
          todo={todo}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

export default SingleTodo;
