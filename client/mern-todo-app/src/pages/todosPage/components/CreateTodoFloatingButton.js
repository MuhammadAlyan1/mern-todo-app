import { Fab, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

const CreateTodoFloatingButton = ({
  isTodoModalShowing,
  setIsTodoModalShowing,
}) => {
  const styles = {
    fab: {
      backgroundColor: 'primary.main',
      color: '#eee',
      position: 'fixed',
      bottom: 30,
      right: 30,
      '&:hover': {
        backgroundColor: 'primary.main',
      },
    },
  };

  return (
    <Tooltip title="Add New Task" placement="top">
      <Fab
        sx={styles.fab}
        onClick={() => setIsTodoModalShowing(!isTodoModalShowing)}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default CreateTodoFloatingButton;
