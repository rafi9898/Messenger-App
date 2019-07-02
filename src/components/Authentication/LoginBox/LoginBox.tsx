import React from "react";
import { StyledWrapper, StyledContainer } from "../AuthStyled";
import LoginForm from "../Form/LoginForm";

const LoginBox = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <LoginForm />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default LoginBox;
