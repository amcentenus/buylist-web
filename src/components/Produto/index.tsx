import React from 'react';

import { Container, MenuLateral } from './styles';


const Produto: React.FC = () => {
  return (
    <Container>
      <MenuLateral menuCaption='PRODUTOS' />
      <h1>Produtos</h1>
    </Container>
  );
}

export default Produto;