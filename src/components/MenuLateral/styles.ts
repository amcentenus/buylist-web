import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  height: 120px;
  width: 150px;
  margin: 16px 0;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: var(--color-text-default);
`;

export const Menu = styled.div`
  cursor: pointer;
  display: flex;
  margin-top: 12px;
`;

export const MenuItem = styled.span`
  font-size: 18px;
  color: #fff;
  margin-left: 8px;
`;

