import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';
import { FaUserCog } from 'react-icons/fa'
import { Container } from './styles';

import Logo from '../../assets/tobuylist.png';
import UserContext from '../../services/context';

const Header: React.FC = () => {
  const appName = process.env.REACT_APP_NAME;
  const history = useHistory();
  const userContext = useContext(UserContext);

  function handleProfileClick() {
    history.push('/home#profile', { User: userContext.Id });
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
        <span>{userContext.Name}</span>
      </div>
      <div className="menu">
        <FaUserCog size={24} color='#fff' onClick={handleProfileClick} />
      </div>
    </Container>
  );
}

export default Header;