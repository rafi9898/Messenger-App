import React from "react";
import ChatBox from "../../Chat/ChatBox/ChatBox";
import { StyledWrapper } from "./StyledChat";
import { connect } from "react-redux";

const Chat = (props: any) => {
  return (
    <StyledWrapper>
      <ChatBox />
    </StyledWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    projects: state.project.projects
  };
};

export default connect(mapStateToProps)(Chat);
