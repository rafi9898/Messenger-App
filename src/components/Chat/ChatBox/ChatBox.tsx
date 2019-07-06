import React from "react";
import Search from "../../Chat/SearchBox/Search";
import MessageBox from "../MessageBox/MessageBox";
import {
  StyledWrapper,
  StyledSearchBox,
  StyledMessageBox
} from "./StyledChatBox";

const ChatBox = () => {
  return (
    <StyledWrapper>
      <StyledSearchBox>
        <Search />
      </StyledSearchBox>

      <StyledMessageBox>
        <MessageBox />
      </StyledMessageBox>
    </StyledWrapper>
  );
};

export default ChatBox;
