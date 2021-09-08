import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, SignInButton, SignInTitle } from './sign-in.styles';

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({ email: '', password: '' });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          label="email"
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          label="password"
          handleChange={handleChange}
        />

        <SignInButton>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} type="button" isGoogleSignIn>
            Sign in with google
          </CustomButton>
        </SignInButton>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
