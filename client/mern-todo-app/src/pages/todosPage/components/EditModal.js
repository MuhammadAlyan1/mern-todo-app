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
  const { _id: todoId, contents: todoText, isCompleted } = todo;
  const [newTodoText, setNewTodoText] = useState(todoText);

  const styles = {
    stack: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '25px',
    },

    modal: {
      position: 'absolute',
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: 2,
      backgroundColor: '#333',
      width: { xs: '250px', sm: '500px' },
      height: '100px',
      borderRadius: 2,
    },

    iconButton: {
      color: 'primary.main',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    editIcon: {
      fontSize: 28,
    },
  };

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
      <Box sx={styles.modal}>
        <Stack sx={styles.stack}>
          <TextField
            label="Edit Task"
            size="small"
            variant="outlined"
            fullWidth
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <IconButton sx={styles.iconButton} onClick={handleEditClick}>
            <EditIcon sx={styles.editIcon} />
          </IconButton>
        </Stack>
      </Box>
    </Modal>
  );
};

export default EditModal;
