import React, { useState } from 'react';

import { Container } from './styles';

const Menu: React.FC = () => {
  const [activeButton, setActiveButton] = useState('');

  function handleMenuPress(e: React.MouseEvent<HTMLButtonElement>): void {
    setActiveButton(e.currentTarget.id);
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
