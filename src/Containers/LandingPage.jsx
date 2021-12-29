import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../Components/LoginForm';
import SignUpForm from '../Components/SignUpForm';
import JobTracker from '../Components/JobTracker';
import Footer from '../Components/Footer';
import pic from '../donut.png';


function LandingPage() {
  return (
    <div>
      <LoginForm/>
      <div className = 'landing-page'>
        {/* <SignUpForm/> */}
        <div className = 'header'>
          <img className="logo" src={pic} alt={'donut'}/>
          <h1>doughnut</h1>
        </div>
        <JobTracker/>
      </div>
    </div>
  );
}

export default LandingPage;