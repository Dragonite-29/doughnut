import React from 'react';
import Footer from './Components/Footer.jsx'
// import LoginForm from './Components/LoginForm';
import LandingPage from './Containers/LandingPage';

// RENDERS landing page
function App() {
  return (
    <div className = 'container'>
      {/* Hello this is the App */}
      <LandingPage />
      <Footer/>
    </div>
  
  );
}

export default App;