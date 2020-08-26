import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Validate from '../../services/validation';
import Api from '../../services/api';
import { toastSuccess } from '../../services/Toast';

import {
  Container, Content, Logos, Form, FormInput,
  FormButtons, FormButton, SignIN
} from './styles';

import AppLogo from '../../assets/buylist_logo.png';
import CILogo from '../../assets/CI_logo.png';

const Logon: React.FC = () => {
  const [login, setLogin] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const loginRef = useRef<HTMLInputElement>(null);
  const nomeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const history = useHistory();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validate = new Validate();
    validate.exist(login, 'Login não informado!');
    validate.exist(email, 'E-mail não informado!');
    validate.exist(password, 'Senha não informada!');
    validate.exist(confirmPassword, 'Confirmação de senha não informada!');
    validate.equal(password, confirmPassword, 'Senhas informadas não são iguais!')
    if (validate.valid) {
      try {
        const createUser = {
          Login: login,
          Name: nome ? nome : 'Anônimo',
          Email: email,
          Password: password,
          ConfirmPassword: confirmPassword
        }
        await Api.post('/users', createUser);
        toastSuccess('Usuário criado com sucesso!');
        history.push('/');
      } catch (err) {
        loginRef.current?.focus();
        loginRef.current?.select();
        return;
      }
    }
  }

  function handleCancel() {
    history.push('/');
  }

  return (
    <Container>
      <Content>
        <Logos>
          <img className="CILogo" src={CILogo} alt="CI_Logo" />
          <img className="AppLogo" src={AppLogo} alt="AppLogo" />
        </Logos>
        <Form onSubmit={handleSubmit}>
          <FormInput placeholder="Crie um Login"
            value={login} onChange={e => setLogin(e.target.value)}
            ref={loginRef}
          />
          <FormInput placeholder="Informe seu Nome"
            value={nome} onChange={e => setNome(e.target.value)}
            ref={nomeRef}
          />
          <FormInput placeholder="Digite seu melhor e-mail"
            value={email} onChange={e => setEmail(e.target.value)}
            ref={emailRef}
          />
          <FormInput placeholder="Crie uma senha" type="password"
            value={password} onChange={e => setPassword(e.target.value)}
            ref={passwordRef}
          />
          <FormInput placeholder="Repita sua senha" type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            ref={confirmPasswordRef}
          />
          <FormButtons>
            <FormButton id="save" type="submit" >
              Criar
            </FormButton>
            <FormButton id="cancel" type="button" onClick={handleCancel}>
              Cancelar
            </FormButton>
          </FormButtons>
        </Form>
      </Content>
      <SignIN>
        <Link to='/'>Já tenho usuário</Link>
      </SignIN>
    </Container>
  );
};

export default Logon;