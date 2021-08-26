import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, SignInButton, SignInTitle } from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      alert(error.message);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <SignInContainer>
        <SignInTitle>I already have account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            required
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            required
            label="password"
            handleChange={this.handleChange}
          />

          <SignInButton>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              type="button"
              isGoogleSignIn
            >
              Sign in with google
            </CustomButton>
          </SignInButton>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
