import React, { useCallback } from 'react';
import { FiFile, FiEdit, FiTrash2 } from 'react-icons/fi';

import logoImage from '../../assets/buylist_logo.png';

import { Container, Logo, Title, Menu, MenuItem } from './styles';

interface IMenuLateralProps {
  menuCaption: string;
}

const MenuLateral: React.FC<IMenuLateralProps> = (props) => {
  const handleInclude = useCallback(() => {
    alert('Incluir');
  }, []);

  return (
    <Container>
      <Logo src={logoImage} />
      <Title>{props.menuCaption}</Title>
      <Menu onClick={handleInclude}>
        <FiFile size={18} color="#fff" />
        <MenuItem>INCLUIR</MenuItem>
      </Menu>
      <Menu onClick={handleInclude}>
        <FiEdit size={18} color="#fff" />
        <MenuItem>EDITAR</MenuItem>
      </Menu>
      <Menu onClick={handleInclude}>
        <FiTrash2 size={18} color="#fff" />
        <MenuItem>EXCLUIR</MenuItem>
      </Menu>
    </Container>
  );
};

export default MenuLateral;
