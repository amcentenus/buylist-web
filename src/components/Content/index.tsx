import React from 'react';

import { Container } from './styles';
import imgFundo from '../../assets/tbl_fundo.svg';

const Content: React.FC = () => {
  return (
    <Container>
      <img src={imgFundo} alt="Fundo" />
    </Container>
  );
}

export default Content;