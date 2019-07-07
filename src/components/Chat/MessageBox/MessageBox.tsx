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

const MessageBox: React.SFC<IStyledMessageProps> = () => {
  const [messageList, setMessageList] = useState([
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355"
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);

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

  function setStatusModal() {
    setIsOpen(!isOpen);
  }

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

          <EmoticonsModal isOpenModal={isOpen} />

          <StyledSendBtn>Wyślij</StyledSendBtn>
        </StyledEnterMessageBox>
      </StyledContainer>
    </StyledWrapper>
  );
};

interface IStyledMessageProps {
  mymessage?: any;
  isOpenModal?: boolean;
}

export default MessageBox;
