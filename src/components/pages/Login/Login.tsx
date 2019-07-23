import React from "react";
import LoginBox from "../../Authentication/LoginBox/LoginBox";
import { StyledWrapper } from "./LoginStyled";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Login = ({ auth }: any) => {
  if (auth.uid) return <Redirect to="/dashboard" />;

  return (
    <StyledWrapper>
      <LoginBox />
    </StyledWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Login);
