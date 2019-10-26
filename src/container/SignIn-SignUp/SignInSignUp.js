import React from 'react';
import Signin from '../../component/Signin/Signin';
import Signup from '../../component/sign-up/Signup';
import './SignInSignUp.scss';

const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};

export default SignInSignUp;
