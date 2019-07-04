import React from "react";
import { StyledWrapper, StyledContainer } from "../AuthStyled";
import SignUpForm from "../../Authentication/Form/SignUpForm";

const SignUpBox = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <SignUpForm />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default SignUpBox;
