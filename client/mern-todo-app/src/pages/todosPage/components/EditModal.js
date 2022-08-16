import { IconButton, Modal, TextField, Box } from '@mui/material';
import { Stack } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';
import updateTodo from '../../../api/updateTodo';

const EditModal = ({
  isEditModalShowing,
  setIsEditModalShowing,
  todo,
  dispatch,
}) => {
  const [newTodoText, setNewTodoText] = useState('');
  const { _id: todoId, contents: todoText, isCompleted } = todo;

  const handleEditClick = () => {
    updateTodo({
      todoId,
      todoText: newTodoText,
      isCompleted,
      dispatch,
    });
    setNewTodoText('');
  };

  return (
    <Modal
      open={isEditModalShowing}
      onClose={() => setIsEditModalShowing(false)}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: 2,
          backgroundColor: '#333',
          width: { xs: '250px', sm: '500px' },
          height: '100px',
          borderRadius: 2,
        }}
      >
        <Stack direction="row" alignItems="center" mt="25px">
          <TextField
            label="Edit Todo"
            size="small"
            variant="outlined"
            fullWidth
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <IconButton shape="square" onClick={handleEditClick}>
            <EditIcon fontSize="medium" color="primary" />
          </IconButton>
        </Stack>
      </Box>
    </Modal>
  );
};

export default EditModal;
