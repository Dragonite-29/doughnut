import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import App from './App';
import MainDashboard from './Containers/MainDashboard';
import TwilioRegistrationPage from './Containers/TwilioRegistrationPage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<App />} />
      <Route path="/main" element={<MainDashboard />} />
      <Route path="/signup" element={<TwilioRegistrationPage />} />
    </Switch>
  </BrowserRouter>
);

export default Router;