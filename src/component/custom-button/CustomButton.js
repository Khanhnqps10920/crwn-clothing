import React from 'react';
// style
import './CustomButton.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
