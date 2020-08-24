import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container, Logout, LogoutIcon, ProfileForm, Form, FormButtons, FormButton,
  FormInput, FormInputLabel, FormInputBox
} from './styles';

import Logo from '../../assets/tbl_fundo.svg';
import api from '../../services/api';
import { toastError } from '../../services/Toast';
import { removeUser } from '../../services/localStorage';
import { existOrError } from '../../services/verification';

interface ProfileProps {
  userId: string;
}
interface IUserData {
  Name: string;
  Login: string;
  Email: string;
}

const Profile: React.FC<ProfileProps> = ({ userId }) => {
  const history = useHistory();
  const ID = userId;
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordEnabled, setPasswordEnabled] = useState(true);
  const [saveDisabled, setSaveDisabled] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    Login: '', Name: '', Email: ''
  });
  const [errorInputName, setErrorInputName] = useState<boolean>(false);
  const [errorInputLogin, setErrorInputLogin] = useState<boolean>(false);
  const [errorInputEmail, setErrorInputEmail] = useState<boolean>(false);
  const [errorInputOldPassword, setErrorInputOldPassword] = useState<boolean>(false);
  const [errorInputConfirmPassword, setErrorInputConfirmPassword] = useState<boolean>(false);

  useEffect(() => {
    async function loadUser() {
      try {
        if (!ID) { return; }
        const response = await api.get(`/users/${ID}`);
        existOrError(
          response.data, 'Erro ao recuperar dados do usuário!'
        );
        const { Login, Name, Email } = response.data;
        setLogin(Login);
        setName(Name);
        setEmail(Email);
        setUserData({ Login, Name, Email });
      } catch (err) {
        toastError('Erro ao recuperar dados do usuário!');
        console.log(err);
      }
    }
    loadUser();

  }, [ID]);

  useEffect(() => {
    if (
      userData.Name === name &&
      userData.Login === login &&
      userData.Email === email &&
      passwordEnabled
    ) { setSaveDisabled(true) } else { setSaveDisabled(false) }
  }, [email, login, name, passwordEnabled, userData.Email, userData.Login, userData.Name]);

  useEffect(() => {
    setPasswordEnabled(!oldPassword);
  }, [oldPassword]);

  function handleCancel() {
    history.goBack();
  }

  function handleLogout() {
    removeUser();
    history.goBack();
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorInputName(!existOrError(name, 'O campo Nome Completo não foi preenchido!'));
    setErrorInputLogin(!existOrError(login, 'O campo Login não foi preenchido!'));
    setErrorInputEmail(!existOrError(email, 'O campo E-mail não foi preenchido!'));
    if (newPassword) {
      setErrorInputConfirmPassword(
        !existOrError(
          confirmPassword, 'O campo de confirmação de senha não foi preenchido!'
        )
      )
    }

    try {
      const response = await api.put('/users', {

      });

    } catch (err) {

    }
  }

  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>MEU PERFIL</span>
        <Logout onClick={handleLogout}>
          <LogoutIcon />
          <h1>Fazer Logout</h1>
        </Logout>
      </div>
      <ProfileForm>
        <Form action="submit" onSubmit={handleSubmit}>
          <FormInput>
            <FormInputLabel htmlFor="nome">Nome Completo:</FormInputLabel>
            <FormInputBox type="text" id="nome" error={errorInputName}
              value={name} onChange={e => setName(e.target.value)}
            />
          </FormInput>
          <FormInput>
            <FormInputLabel htmlFor="login">Login:</FormInputLabel>
            <FormInputBox type="text" id="login" error={errorInputLogin}
              value={login} onChange={e => setLogin(e.target.value)}
            />
          </FormInput>
          <FormInput>
            <FormInputLabel htmlFor="email">E-mail:</FormInputLabel>
            <FormInputBox type="email" id="email" error={errorInputEmail}
              value={email} onChange={e => setEmail(e.target.value)}
            />
          </FormInput>
          <FormInput>
            <FormInputLabel htmlFor="oldPassword">Senha atual:</FormInputLabel>
            <FormInputBox type="password" id="oldPassword"
              error={errorInputOldPassword}
              value={oldPassword} onChange={e => setOldPassword(e.target.value)}
              showPassword={true}
            />
          </FormInput>
          <FormInput>
            <FormInputLabel htmlFor="newPassword">Nova senha:</FormInputLabel>
            <FormInputBox type="password" id="newPassword"
              value={newPassword} onChange={e => setNewPassword(e.target.value)}
              showPassword={true} disabled={passwordEnabled}
            />
          </FormInput>
          <FormInput>
            <FormInputLabel htmlFor="confirmPassword">
              Repita a nova senha:
            </FormInputLabel>
            <FormInputBox type="password" id="confirmPassword"
              error={errorInputConfirmPassword}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              showPassword={true} disabled={passwordEnabled}
            />
          </FormInput>
        </Form>
        <FormButtons>
          <FormButton id="save" onClick={handleSubmit} disabled={saveDisabled}>
            Salvar
          </FormButton>
          <FormButton id="cancel" onClick={handleCancel}>
            Cancelar
          </FormButton>
        </FormButtons>
      </ProfileForm>
    </Container>
  );
}

export default Profile;
