import React from "react";
import {
  StyledPersonContainer,
  StyledActiveIcon,
  StyledAvatarBox,
  StyledDataPersonBox,
  StyledSearchAvatar,
  StyledPersonName,
  StyledLastMessage
} from "./SearchStyled";
import PersonAvatar from "../../../assets/girl-avatar.png";

const PersonsList: React.SFC<IPersonProps> = ({ name, lastMessage }) => {
  return (
    <StyledPersonContainer>
      <StyledActiveIcon />

      <StyledAvatarBox>
        <StyledSearchAvatar src={PersonAvatar} alt="person avatar" />
      </StyledAvatarBox>

      <StyledDataPersonBox>
        <StyledPersonName>{name}</StyledPersonName>
        <StyledLastMessage>{lastMessage}</StyledLastMessage>
      </StyledDataPersonBox>
    </StyledPersonContainer>
  );
};

interface IPersonProps {
  name?: string;
  lastMessage?: string;
}

export default PersonsList;
