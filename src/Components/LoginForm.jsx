import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Button } from '@mui/material';

function LoginForm() {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');
  
  const handleLogin = (username, password) => {
    fetch('/user/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then((data) => data.json())
      .then((response) => {
        console.log('response from login', response);
        if (response) {
          setIsLoggedIn(response);
        } else {
          setErrorMessage('Incorrect username/password. Please try again.');
        }
      });
  };

  if (isLoggedIn) {
    return (
      <div className='topnav'>
        Hello {username}!
      </div>
    );
  }
  return (
    <AppBar position="fixed" color="primary" >
      <Toolbar justifytext="center">
        <Typography py={3} variant="body1" color="inherit">
          <div className='topnav'>
            {/* <h2>Username</h2> */}
            <form>
              <input
                id="login-username"
                type="text"
                placeholder="username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </form>
            {/* <h2>Password</h2> */}
            <form>
              <input
                id="login-password"
                type="password"
                placeholder="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </form>
            <div>
              <Button
                sx={{
                  '&.MuiButton-text': { color: 'white' },
                  '&:hover': { color: 'rgb(214, 66, 123)' }
                }}
                type="submit"
                onClick={(event) => {
                  event.preventDefault();
                  return handleLogin(username, password);
                }}>
          Log in
              </Button>
            </div>
            {errorMessage}
          </div>
        </Typography>
      </Toolbar>
    </AppBar>

  );
}

export default LoginForm;