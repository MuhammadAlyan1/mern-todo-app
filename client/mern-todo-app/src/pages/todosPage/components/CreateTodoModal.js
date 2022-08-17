import { IconButton, Modal, Stack, TextField, Box } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

import React, { useState, useContext } from 'react';
import { todoAppContext } from '../../../App';
import createTodo from '../../../api/createTodo';

const CreateTodoModal = ({ isTodoModalShowing, setIsTodoModalShowing }) => {
  const {
    state: { userId },
    dispatch,
  } = useContext(todoAppContext);
  const [todoText, setTodoText] = useState('');

  const styles = {
    stack: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '25px',
    },

    box: {
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

    addButton: {
      fontSize: 40,
    },
  };

  const handleCreateTodo = () => {
    if (todoText === '') {
      dispatch({
        type: 'SET_SNACKBAR',
        payload: {
          isSnackbarShowing: true,
          snackbarMessage: 'Task contents cannot be empty',
          snackbarSeverity: 'warning',
        },
      });
      return;
    }
    createTodo({ userId, todoText, dispatch });
    setTodoText('');
  };

  const handleCreateTodoEnter = (event, handleCreateTodo) => {
    if (event.key !== 'Enter') return;
    handleCreateTodo();
  };

  return (
    <Modal
      open={isTodoModalShowing}
      onClose={() => setIsTodoModalShowing(false)}
    >
      <Box sx={styles.box}>
        <Stack sx={styles.stack}>
          <TextField
            label="Add New Task"
            size="small"
            variant="outlined"
            fullWidth
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            onKeyDown={(event) =>
              handleCreateTodoEnter(event, handleCreateTodo)
            }
          />
          <IconButton sx={styles.iconButton} onClick={handleCreateTodo}>
            <AddBoxIcon sx={styles.addButton} />
          </IconButton>
        </Stack>
      </Box>
    </Modal>
  );
};

export default CreateTodoModal;
