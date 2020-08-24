import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #555E7B;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  border: solid 1px #fff;
  padding: 8px;
`;

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  .AppLogo {
    width: 100px;
    height: 80px;
  }
  .CILogo {
    width: 200px;
    height: 80px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #fff;
  flex: 1;
  margin-top: 8px;
  border-radius: 24px;
  padding-top: 16px;
`;
export const FormInput = styled.input`
  height: 40px;
  width: 360px;
  padding: 8px 24px;
  background: #c1c1c1;
  margin: 8px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: bold;
  &::placeholder{
    color: rgba(255,255,255,0.7);
  }
`;
export const FormButton = styled.button`
  height: 40px;
  width: 160px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  background: var(--color-button-ok);
  border-radius: 16px;
  align-self: center;
  margin-top: 8px;
  transition: opacity 0.5s;
  
  &:hover{
    opacity: 0.7;
  }
`;
export const SignUP = styled.div`
  width: 400px;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    transition: opacity 0.5s;
    
    :hover {
      opacity: 0.7;
    }
  }

`;
