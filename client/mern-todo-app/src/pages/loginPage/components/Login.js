import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { todoAppContext } from '../../../App';
import loginUser from '../../../api/loginUser';
import ShowSnackbar from '../../../components/ShowSnackbar';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch } = useContext(todoAppContext);

  const styles = {
    stack: {
      color: '#eee',
      gap: 1.5,
      minWidth: {
        xs: '300px',
        sm: '400px',
      },
    },

    box: {
      display: 'flex',
      alignItems: 'center',
    },

    button: {
      color: 'error.main',
      '&:hover': { backgroundColor: 'transparent' },
    },
  };

  return (
    <>
      {state.userId && <Navigate to="/todosPage" />}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '90vh' }}
      >
        <Stack sx={styles.stack}>
          <Typography textAlign="center" variant="h4" component="div">
            Login
          </Typography>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            variant="outlined"
            size="small"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            variant="outlined"
            size="small"
          />
          <Button
            variant="contained"
            onClick={() => loginUser({ username, password }, dispatch)}
          >
            Login
          </Button>
          <Box sx={styles.box}>
            <Typography>Don't have an account yet?</Typography>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button variant="text" sx={styles.button}>
                Register
              </Button>
            </Link>
          </Box>
        </Stack>
        {state.isSnackbarShowing && <ShowSnackbar />}
      </Grid>
    </>
  );
};

export default Login;
