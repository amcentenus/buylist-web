import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaUserCog } from 'react-icons/fa'

import { getUser } from '../../services/localStorage';

import { Container } from './styles';
import Logo from '../../assets/tobuylist.png';

const Header: React.FC = () => {
  const appName = process.env.REACT_APP_NAME;
  const [userID, setUserID] = useState('');
  const [userName, setUserName] = useState('');
  const history = useHistory();

  useEffect(() => {
    const { Id, Name } = getUser();
    setUserID(Id);
    setUserName(Name);
  }, []);

  function handleProfileClick() {
    history.push('/home#profile', { User: userID });
  }
  function handleHomeClick() {
    history.push('/home');
  }

  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="title">
        <span onClick={handleHomeClick}>{appName}</span>
      </div>
      <div className="user-name">
        <span>{userName}</span>
      </div>
      <div className="menu">
        <FaUserCog size={24} color='#fff' onClick={handleProfileClick} />
      </div>
    </Container>
  );
}

export default Header;