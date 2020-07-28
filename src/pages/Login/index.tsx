import React, { useState } from 'react';

import { Container, Content, Logos, Form, FormInput, FormButton } from './styles';
import AppLogo from '../../assets/buylist_logo.png';
import CILogo from '../../assets/CI_logo.png';

const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(login, password);
  }

  return (
    <Container>
      <Content>
        <Logos>
          <img className="CILogo" src={CILogo} alt="CI_Logo" />
          <img className="AppLogo" src={AppLogo} alt="AppLogo" />
        </Logos>
        <Form onSubmit={handleSubmit}>
          <FormInput placeholder="Login ou E-mail"
            value={login} onChange={e => setLogin(e.target.value)}
          />
          <FormInput placeholder="Senha" type="password"
            value={password} onChange={e => setPassword(e.target.value)}
          />
          <FormButton type="submit">Entrar</FormButton>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;