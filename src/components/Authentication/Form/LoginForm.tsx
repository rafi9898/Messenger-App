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

class LoginForm extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledForm>
          <StyledFlex>
            <StyledFormTitle>Welcome Back!</StyledFormTitle>
            <StyledFormSubTitle>Login to your message panel</StyledFormSubTitle>

            <StyledLabel>Email</StyledLabel>
            <StyledInput type="email" required />

            <StyledLabel>Password</StyledLabel>
            <StyledInput type="password" required />

            <StyledButton>Login</StyledButton>
            <StyledAnotherLink to="/signup">
              Register an account
            </StyledAnotherLink>
          </StyledFlex>
        </StyledForm>
      </StyledWrapper>
    );
  }
}

export default LoginForm;
