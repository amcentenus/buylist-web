import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Validate from '../../services/validation';
import Api from '../../services/api';
import { setUser } from '../../services/localStorage';

import {
  Container, Content, Logos, Form, FormInput, FormButton, SignUP
} from './styles';

import AppLogo from '../../assets/buylist_logo.png';
import CILogo from '../../assets/CI_logo.png';

const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validate = new Validate();
    validate.exist(login, 'Login ou E-mail não informado!');
    validate.exist(password, 'Senha não informada!');
    if (validate.valid) {
      try {
        const response = await Api.post('/sessions', {
          UserName: login, Password: password
        });
        setUser(response.data);
        history.push('/home');
      } catch (err) {
        loginRef.current?.focus();
        loginRef.current?.select();
        return;
      }
    }
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
            ref={loginRef}
          />
          <FormInput placeholder="Senha" type="password"
            value={password} onChange={e => setPassword(e.target.value)}
            ref={passwordRef}
          />
          <FormButton type="submit">Entrar</FormButton>
        </Form>
      </Content>
      <SignUP>
        <Link to='/logon'>Não tenho conta</Link>
      </SignUP>
    </Container>
  );
};

export default Login;