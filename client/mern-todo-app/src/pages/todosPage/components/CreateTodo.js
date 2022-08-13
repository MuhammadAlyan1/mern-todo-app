import React, { useState, useContext } from 'react';
import { Box } from '@mui/system';
import { IconButton, Modal, Stack, TextField } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Fab, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import createTodo from '../../../api/createTodo';
import { todoAppContext } from '../../../App';
import ShowSnackbar from '../../../components/ShowSnackbar';

const CreateTodo = () => {
  const { state, dispatch } = useContext(todoAppContext);
  const [isTodoModalShowing, setIsTodoModalShowing] = useState(false);
  const [todoText, setTodoText] = useState('');
  const { userId } = state;

  const handleCreateTodo = () => {
    if (todoText === '') {
      dispatch({
        type: 'SET_SNACKBAR',
        payload: {
          isSnackbarShowing: true,
          snackbarMessage: 'Todo contents cannot be empty',
          snackbarSeverity: 'warning',
        },
      });
      return;
    }
    createTodo({ userId, todoText, dispatch });
    setTodoText('');
  };

  return (
    <>
      <Tooltip title="Add New Todo" placement="top">
        <Fab
          color="primary"
          sx={{
            position: 'absolute',
            bottom: 30,
            right: 30,
          }}
          onClick={() => setIsTodoModalShowing(!isTodoModalShowing)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={isTodoModalShowing}
        onClose={() => setIsTodoModalShowing(false)}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: 2,
            backgroundColor: 'white',
            width: { xs: '250px', sm: '500px' },
            height: '100px',
            borderRadius: 2,
          }}
        >
          <Stack direction="row" alignItems="center" mt="25px">
            <TextField
              label="Add New Todo"
              size="small"
              variant="outlined"
              fullWidth
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
            <IconButton shape="square" onClick={handleCreateTodo}>
              <AddBoxIcon fontSize="large" color="primary" />
            </IconButton>
          </Stack>
        </Box>
      </Modal>
      {state.isSnackbarShowing && <ShowSnackbar />}
    </>
  );
};

export default CreateTodo;
