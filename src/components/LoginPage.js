import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography } from '@mui/material';
import AxiosSvc from '../services/AxiosSvc';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  var token;

  const handleLogin = () => {
    // Perform login logic here, e.g., making an API request to authenticate
    AxiosSvc.post('/auth/login', { username, password })
    .then((response) => {
      // Handle successful login
      token = response.data.token;
      
      // Redirect to the task list page after successful login
      navigate('/tasks');
    })
    .catch((error) => {
      // Handle login error
      console.error(error);
    });
    // Redirect to the task list page after successful login
    navigate('/tasks');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h2" align="center" gutterBottom>
        Login Page
      </Typography>
      <form>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={handlePasswordChange}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </Container>
  );
}

export default LoginPage;
