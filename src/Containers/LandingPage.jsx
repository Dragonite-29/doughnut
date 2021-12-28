import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../Components/LoginForm';
import SignUpForm from '../Components/SignUpForm';

function LandingPage() {
  return (
    <div>
      <LoginForm/>
      <SignUpForm/>
      
    </div>
  );
}

export default LandingPage;