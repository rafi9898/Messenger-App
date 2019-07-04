import React, { Component } from "react";
import {
  StyledWrapper,
  StyledForm,
  StyledFormTitle,
  StyledFormSubTitle,
  StyledFlex,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledAnotherLink
} from "./FormStyled";

class SignUpForm extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledForm>
          <StyledFlex>
            <StyledFormTitle>Register</StyledFormTitle>
            <StyledFormSubTitle>Register a new account!</StyledFormSubTitle>
            <StyledLabel>Email</StyledLabel>
            <StyledInput type="email" required />
            <StyledLabel>First name</StyledLabel>
            <StyledInput type="text" required />
            <StyledLabel>Last name</StyledLabel>
            <StyledInput type="text" required />
            <StyledLabel>Password</StyledLabel>
            <StyledInput type="password" required />
            Choose profile image
            <StyledButton>Sign Up</StyledButton>
            <StyledAnotherLink to="/login">
              Do you have an account? Sign In!
            </StyledAnotherLink>
          </StyledFlex>
        </StyledForm>
      </StyledWrapper>
    );
  }
}

export default SignUpForm;
