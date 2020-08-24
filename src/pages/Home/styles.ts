import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 64px auto;
  grid-template-areas: 
    'header header'
    'menu content';
  height: 100vh;
  background: #555E7B;
  .header{
    grid-area: header;
  }
`;
