import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../Components/LoginForm';
import SignUpForm from '../Components/SignUpForm';
import JobTracker from '../Components/JobTracker';

function LandingPage() {
  return (
    <div>
      {/* <LoginForm/>
      <SignUpForm/> */}
      <JobTracker/>
    </div>
  );
}

export default LandingPage;