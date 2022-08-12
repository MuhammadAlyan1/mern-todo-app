import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       'http://localhost:5000/api/todos/62f3be7bdbea6c1087749f04'
  //     );

  //     console.log(response.data);
  //   };

  //   fetchData();
  // }, []);

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
        <Button variant="contained">Login</Button>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>Don't have an account yet?</Typography>
          <Button variant="text" color="error">
            Register
          </Button>
        </Box>
      </Stack>
    </Grid>
  );
};

export default Login;
