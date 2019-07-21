import React from "react";
import Search from "../../Chat/SearchBox/Search";
import MessageBox from "../MessageBox/MessageBox";
import {
  StyledWrapper,
  StyledSearchBox,
  StyledMessageBox
} from "./StyledChatBox";

const ChatBox = ({ rooms, roomId }: any) => {
  return (
    <StyledWrapper>
      <StyledSearchBox>
        <Search rooms={rooms} />
      </StyledSearchBox>

      <StyledMessageBox>
        <MessageBox roomId={roomId} />
      </StyledMessageBox>
    </StyledWrapper>
  );
};

export default ChatBox;
