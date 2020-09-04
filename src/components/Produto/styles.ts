import styled from 'styled-components';
import MenuLat from '../MenuLateral';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'logo content';
  flex: 1;
  padding: 16px;
  justify-content: center;
`;

export const MenuLateral = styled(MenuLat)`
  grid-area: logo;
  height: 100vh;
  width: 200px;
`;
