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
import PersonAvatar from "../../../assets/hashtag-icon.png";

const PersonsList: React.SFC<IPersonProps> = ({ name, lastMessage, color }) => {
  return (
    <StyledPersonContainer>
      <StyledActiveIcon currentColor={color} />

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
  color?: string;
}

export default PersonsList;
