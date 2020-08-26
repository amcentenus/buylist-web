import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Conteudo from '../../components/Content';
import Profile from '../../components/Profile';

import { Container } from './styles';
import { getUser } from '../../services/localStorage';
import UserContext from '../../services/context';

interface LocationState {
  User: string;
}

const Home: React.FC = () => {
  const location = useLocation<LocationState>()
  const [hashURL, setHashURL] = useState('');

  useEffect(() => {
    setHashURL(location.hash);
  }, [hashURL, location.hash]);

  function renderComponent() {
    switch (hashURL) {
      case '#profile':
        return <Profile userId={location.state?.User} />
      default:
        return <Conteudo />
    }
  }

  return (
    <UserContext.Provider value={getUser()} >
      <Container>
        <div className="header">
          <Header />
        </div>
        <div className="menu">
          <Menu />
        </div>
        <div className="content">
          {renderComponent()}
        </div>
      </Container>
    </UserContext.Provider>
  );
}

export default Home;