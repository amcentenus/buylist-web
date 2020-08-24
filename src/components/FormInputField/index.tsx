import React, { useState } from 'react';


import {
  Container, InputControl, IconError, IconPassVisible, IconPassInvisible
} from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  showPassword?: boolean;
  disabled?: boolean;
  type?: string;
}
const FormInputField: React.FC<InputProps> = ({
  showPassword,
  error,
  disabled,
  type,
  ...rest
}) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string | undefined>(type);

  function passwordIcon() {
    return passwordVisible ?
      <IconPassInvisible onClick={handleEyeClick} /> :
      <IconPassVisible onClick={handleEyeClick} />
  }

  function handleEyeClick() {
    setPasswordVisible(!passwordVisible);
    inputType === 'password' ? setInputType("text") : setInputType("password");
  }

  return (
    <Container {...rest} >
      <InputControl {...rest} type={inputType} />
      {error && <IconError />}
      {showPassword && !disabled && passwordIcon()}
    </Container>
  );
}

export default FormInputField;