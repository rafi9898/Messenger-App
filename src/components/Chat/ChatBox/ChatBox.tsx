import React from "react";
import Search from "../../Chat/SearchBox/Search";
import MessageBox from "../MessageBox/MessageBox";
import {
  StyledWrapper,
  StyledSearchBox,
  StyledMessageBox
} from "./StyledChatBox";

const ChatBox = ({ rooms, roomId, userId }: any) => {
  return (
    <StyledWrapper>
      <StyledSearchBox>
        <Search rooms={rooms} />
      </StyledSearchBox>

      <StyledMessageBox>
        <MessageBox userId={userId} roomId={roomId} />
      </StyledMessageBox>
    </StyledWrapper>
  );
};

export default ChatBox;
