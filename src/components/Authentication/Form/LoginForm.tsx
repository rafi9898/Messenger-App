import React, { Component, Dispatch } from "react";
import {
  StyledWrapper,
  StyledForm,
  StyledFormTitle,
  StyledFormSubTitle,
  StyledFlex,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledAnotherLink,
  StyledAuthError
} from "./FormStyled";
import { connect } from "react-redux";
import { signIn } from "../../../store/actions/authActions";

class LoginForm extends Component<ILoginState> {
  state = {
    email: "",
    password: ""
  };

  setCurrentData = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    } as Pick<ILoginState, keyof ILoginState>);
  };

  signIn = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    return (
      <StyledWrapper>
        <StyledForm onSubmit={this.signIn}>
          <StyledFlex>
            <StyledFormTitle>Welcome Back!</StyledFormTitle>
            <StyledFormSubTitle>Login to your message panel</StyledFormSubTitle>

            <StyledLabel>Email</StyledLabel>
            <StyledInput
              onChange={this.setCurrentData}
              name="email"
              type="email"
              required
            />

            <StyledLabel>Password</StyledLabel>
            <StyledInput
              onChange={this.setCurrentData}
              name="password"
              type="password"
              required
            />

            {this.props.authError ? (
              <StyledAuthError>{this.props.authError}</StyledAuthError>
            ) : null}
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

const mapStateToProps = (state: any) => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    signIn: (creds: object) => dispatch(signIn(creds))
  };
};

interface ILoginState {
  email?: string;
  passwrod?: string;
  signIn?: any;
  authError?: string;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
