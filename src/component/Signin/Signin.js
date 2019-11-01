import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
// style
import './Signin.scss';
import CustomButton from '../custom-button/CustomButton';
//firebase auth
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
const Signin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleFormSubmit = async e => {
    e.preventDefault();

    const { email, password } = formData;
    try {
      await auth.signInWithEmailAndPassword(email, password);

      setFormData({ ...formData, email: '', password: '' });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          name="email"
          type="email"
          value={formData.email}
          handleChange={handleChange}
          required
          label="email"
        />
        <FormInput
          name="password"
          type="password"
          value={formData.password}
          required
          label="password"
          handleChange={handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Signin;
