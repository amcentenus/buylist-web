import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  background: #005B70;
  padding-top: 8px;
  padding-left: 32px;
  button {
    margin-top: 8px;
    background: transparent;
    height: 48px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
    text-align:left;
    position: relative;
    opacity: 0.75;

    &.active {
      opacity: 1;
    }
    
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      height: 4px;
      width: 0;
      background-color: #FFF;
      transition: 0.5s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
