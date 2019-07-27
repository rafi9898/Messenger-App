import React from "react";
import ChatBox from "../../Chat/ChatBox/ChatBox";
import { StyledWrapper } from "./StyledChat";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const Chat = ({ rooms, match, auth }: any) => {
  if (!auth.uid) return <Redirect to="/" />;

  return (
    <StyledWrapper>
      <ChatBox userId={auth.uid} rooms={rooms} roomId={match.params.id} />
    </StyledWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    rooms: state.firestore.ordered.rooms,
    auth: state.firebase.auth
  };
};

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "rooms" }])
)(Chat);
