import React, { useContext } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { todoAppContext } from '../App';

const ShowSnackbar = () => {
  const { state, dispatch } = useContext(todoAppContext);
  const { isSnackbarShowing, snackbarMessage, snackbarSeverity } = state;

  return (
    <Snackbar
      open={isSnackbarShowing}
      autoHideDuration={2000}
      onClose={() =>
        dispatch({
          type: 'HIDE_SNACKBAR',
          payload: {
            isSnackbarShowing: false,
          },
        })
      }
    >
      <Alert
        onClose={() =>
          dispatch({
            type: 'HIDE_SNACKBAR',
            payload: {
              isSnackbarShowing: false,
            },
          })
        }
        severity={snackbarSeverity}
        sx={{ width: '100%' }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default ShowSnackbar;
