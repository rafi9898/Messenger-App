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
import ImageUploader from "react-images-upload";

class SignUpForm extends Component<{}, IStateSignUp> {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    profileImage: []
  };

  setCurrentData = (e: any) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    } as Pick<IStateSignUp, keyof IStateSignUp>);
  };

  setProfileImage = (image: any) => {
    this.setState({
      profileImage: [image[image.length - 1]]
    });
  };

  createNewUser = (e: any) => {
    e.preventDefault();
    if (
      this.state.email &&
      this.state.firstName &&
      this.state.lastName &&
      this.state.password
    ) {
      console.log(this.state);
    }
  };

  render() {
    console.log(this.state.profileImage);
    return (
      <StyledWrapper>
        <StyledForm>
          <StyledFlex>
            <StyledFormTitle>Register</StyledFormTitle>
            <StyledFormSubTitle>Register a new account!</StyledFormSubTitle>
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              onChange={this.setCurrentData}
              name="email"
              type="email"
              required
            />
            <StyledLabel>First name</StyledLabel>
            <StyledInput
              onChange={this.setCurrentData}
              name="firstName"
              type="text"
              required
            />
            <StyledLabel>Last name</StyledLabel>
            <StyledInput
              onChange={this.setCurrentData}
              name="lastName"
              type="text"
              required
            />
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              onChange={this.setCurrentData}
              name="password"
              type="password"
              required
            />
            <ImageUploader
              singleImage={true}
              withIcon={true}
              buttonText="Choose images"
              onChange={this.setProfileImage}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
            />
            <StyledButton onClick={this.createNewUser}>Sign Up</StyledButton>
            <StyledAnotherLink to="/login">
              Do you have an account? Sign In!
            </StyledAnotherLink>
          </StyledFlex>
        </StyledForm>
      </StyledWrapper>
    );
  }
}

interface IStateSignUp {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  profileImage?: any;
}

export default SignUpForm;
