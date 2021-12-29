import React, { useState } from 'react';

function LoginForm() {

  const [ username, setUsername ] = useState('');

  // const handleLogin = (username) => {
  //   fetch('/jobs/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //   .then()
  // };
  return (
    <div>
      <div>
        <h2>Username</h2>
        <form>
          <input
            id="login-username"
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          />
        </form>
      </div>
      <div>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            return handleLogin(username);
          }}>
          Log in
        </button>
      </div>
    </div>

  );
}

export default LoginForm;