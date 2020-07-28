import React from 'react';
import { ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
