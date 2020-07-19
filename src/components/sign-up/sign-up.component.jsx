import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';
import { signupStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignUp = ({signupStart}) => {
const [userCredentials, setUserCredentials] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  
  const { displayName, email, password, confirmPassword } = userCredentials;

const  handleSubmit = async event => {
    event.preventDefault();
    setUserCredentials({ displayName, email, password, confirmPassword });

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    
    signupStart({displayName , email, password});
  };

 const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({...userCredentials, [name]: value });
  };
   
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
  signupStart : userCredentials => dispatch(signupStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
