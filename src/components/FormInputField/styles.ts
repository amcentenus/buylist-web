import styled, { css } from 'styled-components';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { MdError } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: var(--color-input-background);
  border-radius: 16px;
  padding: 8px;
  align-items: center;
`;

export const InputControl = styled.input`
  width: 100%;
  height: 32px;
  font-size: 16px;
  background: transparent;
  margin: 0 !important;
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
  fill: #595959;
`;

export const IconError = styled(MdError)`
  ${iconCSS};
  fill: #FF3737;
`;
export const IconPassVisible = styled(FaRegEye)`
  ${iconCSS};
`;
export const IconPassInvisible = styled(FaRegEyeSlash)`
  ${iconCSS};
`;

