import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// import { Container } from './styles';

import Login from '../pages/Login';
import Logon from '../pages/Logon';
import Home from '../pages/Home';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/logon' component={Logon} />

      <Route path='/home' component={Home} isPrivate />
    </Switch>
  );
}

export default routes;