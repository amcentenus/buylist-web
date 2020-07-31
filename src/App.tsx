import React from 'react';
import { ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
      <ToastContainer />
    </Router>
  );
}

export default App;
