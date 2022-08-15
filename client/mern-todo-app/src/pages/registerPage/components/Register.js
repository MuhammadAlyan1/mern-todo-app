import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useContext } from 'react';
import { todoAppContext } from '../../../App';
import registerUser from '../../../api/registerUser';
import ShowSnackbar from '../../../components/ShowSnackbar';
import { Link, Navigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch } = useContext(todoAppContext);

  return (
    <>
      {state.userId && <Navigate to="/todosPage" />}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '90vh' }}
      >
        <Stack
          spacing={1.5}
          sx={{
            minWidth: {
              xs: '300px',
              sm: '400px',
            },
            color: '#eee',
          }}
        >
          <Typography textAlign="center" variant="h4" component="div">
            Register
          </Typography>
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            label="Username"
            variant="outlined"
            size="small"
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            label="Password"
            type="password"
            variant="outlined"
            size="small"
          />
          <Button
            variant="contained"
            onClick={() => registerUser({ username, password }, dispatch)}
          >
            Register
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>Already have an account?</Typography>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                variant="text"
                color="error"
                sx={{
                  '&:hover': { backgroundColor: 'transparent' },
                }}
              >
                Login
              </Button>
            </Link>
          </Box>
        </Stack>
      </Grid>
      {state.isSnackbarShowing && <ShowSnackbar />}
    </>
  );
};

export default Register;
