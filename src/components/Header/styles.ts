import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 64px 300px auto 200px 64px;
  grid-template-areas: 'logo title none user menu';
  flex: 1;
  height: 100%;
  background: #005B70;

  .logo {
    grid-area: logo;
    display: flex;
    align-items: center;
    justify-content: center;  
    img {
      height: 48px;
      width: 48px;
    }
  }

  .title {
    grid-area: title;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      cursor: default;
      font-size: 32px;
      font-weight: bold;
      color: #fff;
      text-transform:uppercase;
    }
  }

  .user-name {
    grid-area: user;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span {
      cursor: default;
      font-size: 12px;
      font-weight: bold;
      color: #fff;
    }
  }

  .menu {
    cursor: pointer;
    grid-area: menu;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s;
    :hover {
      opacity: 0.4;
    }
  }
`;
