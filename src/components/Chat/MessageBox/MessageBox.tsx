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

const MessageBox: React.SFC<IStyledMessageProps> = props => {
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
    props.createModal(true);
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledHeaderMessage>
          <StyledHeaderTitle>Anna Nowak</StyledHeaderTitle>
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

          <EmoticonsModal setModalStatus={props.createModal} />

          <StyledSendBtn>Wyślij</StyledSendBtn>
        </StyledEnterMessageBox>
      </StyledContainer>
    </StyledWrapper>
  );
};

interface IStyledMessageProps {
  mymessage?: any;
  isOpenModal?: boolean;
  createModal?: any;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createModal: (state: boolean) => dispatch(createModal(state))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MessageBox);
