import styled, { css } from 'styled-components';
import Input from '../FormInputField';

import { RiLogoutBoxLine } from 'react-icons/ri';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'logo form';
  flex: 1;
  padding: 16px;
  justify-content: center;

  .logo {
    grid-area: logo;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 150px;
      width: 180px;
    }
    span {
      font-size: 20px;
      font-weight: bold;
      color: var(--color-text-default);
    }
  }

`;

export const Logout = styled.div`
  cursor: pointer;  
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  transition: opacity 0.5s;
  :hover {
    opacity: 0.7;
  }
  h1 {
    margin-left: 8px;
    font-size: 16px;
    color: var(--color-text-default);
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--color-icons);
`;

export const LogoutIcon = styled(RiLogoutBoxLine)`
  ${iconCSS}
`;

export const ProfileForm = styled.div`
  grid-area: form;
  margin: 16px 48px;
  padding: 32px 48px 16px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  background: var(--color-secundary);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const FormInputLabel = styled.label`
  color: var(--color-text-default);
  font-size: 16px;
  font-weight: bold;
`;

export const FormInputBox = styled(Input)`
  margin: 8px 0 16px;
`;

export const FormButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 64px;
  margin-top: 8px;
  #save {
    background: var(--color-button-ok);
  }
  #cancel {
    margin-left: 16px;
    background: var(--color-button-cancel);
  }
`;

export const FormButton = styled.button`
  width: 120px;
  height: 48px;
  border-radius: 16px;
  font-size: 16px;
  color: var(--color-button-text);
  font-weight: bold;
  opacity: ${ props => props.disabled ? 0.2 : 1};
  transition: opacity 0.5s;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  :hover {
    opacity: ${props => props.disabled ? 0.2 : 0.7};
  }
  
`;
