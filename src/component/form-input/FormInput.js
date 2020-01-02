import React from 'react';
//style
// import './FormInput.scss';
//styed component
import {
  FormInputContainer,
  InputContainer,
  InputLabel
} from './FormInput.styles';
const FormInput = ({ handleChange, label, ...otherProps }) => {
  console.log(otherProps);
  return (
    <InputContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? <InputLabel {...otherProps}>{label}</InputLabel> : null}
    </InputContainer>
  );
};

export default FormInput;
