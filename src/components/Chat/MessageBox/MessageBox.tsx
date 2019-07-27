import React, { Component } from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledHeaderMessage,
  StyledHeaderTitle,
  StyledEnterMessageBox,
  StyledEnterMessage,
  StyledConfigBtn,
  StyledSendBtn,
  ImageAddIcon,
  InsertEmoticonIcon,
  Styled404Room,
  StyledMainContentBox
} from "./StyledMessageBox";
import MyMessageItem from "./MyMessageItem";
import EmoticonsModal from "../../Modals/EmoticonsModal";
import { connect } from "react-redux";
import { createModal } from "../../../store/actions/modalActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import LoadSpinnerImage from "../../../assets/load-spinner.svg";
import { StyledLoadSpinner } from "../SearchBox/SearchStyled";
import { createMessage } from "../../../store/actions/messageActions";

class MessageBox extends Component<IStyledMessageProps> {
  state = {
    message: "",
    roomId: null
  };

  render() {
    const {
      createModal,
      roomId,
      room,
      createMessage,
      message,
      userId
    } = this.props;

    const setStatusModal = () => {
      createModal(true);
    };

    const setMessage = (e: any) => {
      this.setState({
        message: e.target.value,
        roomId: roomId
      });
    };

    const addNewMessage = (e: any) => {
      e.preventDefault();
      if (this.state.message.length > 0) {
        createMessage(this.state);
        this.setState({
          message: ""
        });
      }
    };

    const sendMessageWithEnter = (e: any) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (this.state.message.length > 0) {
          createMessage(this.state);
          this.setState({
            message: ""
          });
        }
      }
    };

    const currentMessage =
      room && room ? (
        <StyledContainer>
          <StyledHeaderMessage>
            <StyledHeaderTitle>{room.roomName}</StyledHeaderTitle>
          </StyledHeaderMessage>

          <StyledMainContentBox>
            {message && message ? (
              <MyMessageItem userId={userId} message={message} />
            ) : (
              <StyledLoadSpinner src={LoadSpinnerImage} alt="spinner image" />
            )}
          </StyledMainContentBox>
          <StyledEnterMessageBox>
            <StyledEnterMessage
              onKeyDown={sendMessageWithEnter}
              onChange={setMessage}
              value={this.state.message}
              type="text"
              placeholder="Napisz wiadomość"
            />

            <StyledConfigBtn>
              <ImageAddIcon />
            </StyledConfigBtn>

            <StyledConfigBtn onClick={setStatusModal}>
              <InsertEmoticonIcon />
            </StyledConfigBtn>

            <EmoticonsModal setModalStatus={createModal} />

            <StyledSendBtn onClick={addNewMessage}>Wyślij</StyledSendBtn>
          </StyledEnterMessageBox>
        </StyledContainer>
      ) : (
        <StyledContainer>
          <Styled404Room>Aby zobaczyć wiadomość wybierz pokój!</Styled404Room>
        </StyledContainer>
      );

    return (
      <StyledWrapper>
        {currentMessage ? (
          currentMessage
        ) : (
          <StyledLoadSpinner src={LoadSpinnerImage} alt="spinner image" />
        )}
      </StyledWrapper>
    );
  }
}

interface IStyledMessageProps {
  mymessage?: any;
  isOpenModal?: boolean;
  createModal?: any;
  roomId?: any;
  room?: any;
  createMessage?: any;
  message?: any;
  userId?: any;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createModal: (state: boolean) => dispatch(createModal(state)),
    createMessage: (state: any) => dispatch(createMessage(state))
  };
};

const mapStateToProps = (state: any, ownProps: any) => {
  const roomId = ownProps.roomId;
  const rooms = state.firestore.data.rooms;
  const room = rooms ? rooms[roomId] : null;
  const message = state.firestore.ordered.messages;
  return {
    room: room,
    message: message
  };
};

export default compose<any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect((props: any) => {
    return [
      { collection: "rooms" },
      {
        collection: "messages",
        doc: props.roomId && props.roomId ? props.roomId : "Brak Id",
        subcollections: [{ collection: "messageList", orderBy: "createdAt" }],
        storeAs: `messages`
      }
    ];
  })
)(MessageBox);
