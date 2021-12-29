import React, { useState } from 'react';

function LoginForm() {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const handleLogin = (username, password) => {
    fetch('/user/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then((data) => {
        console.log('response from logging in');
      });
  };

  return (
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
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            return handleLogin(username, password);
          }}>
          Log in
        </button>
      </div>
    </div>

  );
}

export default LoginForm;