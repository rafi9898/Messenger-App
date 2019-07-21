import React, { useEffect, useState } from "react";
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
  StyledMainContentBox
} from "./StyledMessageBox";
import MyMessageItem from "./MyMessageItem";
import FriendMessageItem from "./FriendMessageItem";
import EmoticonsModal from "../../Modals/EmoticonsModal";
import axios from "axios";
import { connect } from "react-redux";
import { createModal } from "../../../store/actions/modalActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const MessageBox: React.SFC<IStyledMessageProps> = ({
  createModal,
  roomId,
  room
}) => {
  const [messageList, setMessageList] = useState([
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355"
    }
  ]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      setMessageList(res.data.slice(0, 10));
    });
  }, []);

  const currentMessageList =
    messageList && messageList ? (
      messageList.map(message => {
        return message.id === 5 ? (
          <FriendMessageItem key={message.id} />
        ) : (
          <MyMessageItem key={message.id} />
        );
      })
    ) : (
      <p>Brak wiadomości</p>
    );

  const setStatusModal = () => {
    createModal(true);
  };

  const currentMessage = room ? (
    <StyledContainer>
      <StyledHeaderMessage>
        <StyledHeaderTitle>{room.roomName}</StyledHeaderTitle>
      </StyledHeaderMessage>

      <StyledMainContentBox>{currentMessageList}</StyledMainContentBox>

      <StyledEnterMessageBox>
        <StyledEnterMessage type="text" placeholder="Napisz wiadomość" />

        <StyledConfigBtn>
          <ImageAddIcon />
        </StyledConfigBtn>

        <StyledConfigBtn onClick={setStatusModal}>
          <InsertEmoticonIcon />
        </StyledConfigBtn>

        <EmoticonsModal setModalStatus={createModal} />

        <StyledSendBtn>Wyślij</StyledSendBtn>
      </StyledEnterMessageBox>
    </StyledContainer>
  ) : (
    <p>Taki pokój nie istnieje!</p>
  );

  return (
    <StyledWrapper>
      {currentMessage ? currentMessage : <p>Loading ...</p>}
    </StyledWrapper>
  );
};

interface IStyledMessageProps {
  mymessage?: any;
  isOpenModal?: boolean;
  createModal?: any;
  roomId?: any;
  room?: any;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createModal: (state: boolean) => dispatch(createModal(state))
  };
};

const mapStateToProps = (state: any, ownProps: any) => {
  const roomId = ownProps.roomId;
  const rooms = state.firestore.data.rooms;
  const room = rooms ? rooms[roomId] : null;
  return {
    room: room
  };
};

export default compose<any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "rooms" }])
)(MessageBox);
