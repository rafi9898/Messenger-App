import React from "react";
import Search from "../../Chat/SearchBox/Search";
import { StyledWrapper, StyledSearchBox } from "./StyledChat";

const Chat = () => {
  return (
    <StyledWrapper>
      <StyledSearchBox>
        <Search />
      </StyledSearchBox>
    </StyledWrapper>
  );
};

export default Chat;
