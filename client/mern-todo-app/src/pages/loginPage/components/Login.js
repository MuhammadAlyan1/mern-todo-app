import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { todoAppContext } from '../../../App';
import loginUser from '../../../api/loginUser';
import ShowSnackbar from '../../../components/ShowSnackbar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch } = useContext(todoAppContext);

  return (
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
        }}
      >
        <Typography textAlign="center" variant="h4" component="div">
          Login
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
          onClick={() => loginUser({ username, password }, dispatch)}
        >
          Login
        </Button>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>Don't have an account yet?</Typography>
          <Button variant="text" color="error">
            Register
          </Button>
        </Box>
      </Stack>
      {state.isSnackbarShowing && <ShowSnackbar />}
    </Grid>
  );
};

export default Login;
