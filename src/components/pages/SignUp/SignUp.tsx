import React from "react";
import SignUpBox from "../../Authentication/SignUpBox/SignUpBox";
import { StyledWrapper } from "./SignUpStyled";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const SignUp = ({ auth }: any) => {
  if (auth.uid) return <Redirect to="/dashboard" />;

  return (
    <StyledWrapper>
      <SignUpBox />
    </StyledWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(SignUp);
