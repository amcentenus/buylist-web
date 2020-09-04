import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const Menu: React.FC = () => {
  const [activeButton, setActiveButton] = useState('');
  const history = useHistory();

  function handleMenuPress(e: React.MouseEvent<HTMLButtonElement>): void {
    setActiveButton(e.currentTarget.id);
    history.push(`#${e.currentTarget.id}`);
  }

  return (
    <Container>
      <button id='produto' onClick={handleMenuPress}
        className={activeButton === 'produto' ? 'active' : ''}
      >PRODUTOS</button>
      <button id='levantamento' onClick={handleMenuPress}
        className={activeButton === 'levantamento' ? 'active' : ''}
      >LEVANTAMENTO</button>
      <button id='lista' onClick={handleMenuPress}
        className={activeButton === 'lista' ? 'active' : ''}
      >LISTA</button>
    </Container>
  );
}

export default Menu;
