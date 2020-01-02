import styled, { css } from 'styled-components';

const shinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;
export const InputContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const InputLabel = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${props => {
    if (props.value.length) {
      return shinkLabel;
    }
  }}
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
  }
  letter-spacing: ${props => (props.type === 'password' ? '0.3em' : '')};

  &:focus ~ ${InputLabel} {
    ${shinkLabel};
  }
`;
