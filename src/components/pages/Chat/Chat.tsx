import React from "react";
import ChatBox from "../../Chat/ChatBox/ChatBox";
import { StyledWrapper } from "./StyledChat";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Chat = ({ rooms, match }: any) => {
  return (
    <StyledWrapper>
      <ChatBox rooms={rooms} roomId={match.params.id} />
    </StyledWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    rooms: state.firestore.ordered.rooms
  };
};

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "rooms" }])
)(Chat);
