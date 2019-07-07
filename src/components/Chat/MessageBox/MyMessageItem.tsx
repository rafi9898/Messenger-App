import React from "react";
import {
  StyledMessageContainer,
  StyledMessageBox,
  StyledAvatarBox,
  StyledMessageAvatar,
  StyledContentBox,
  StyledMessage
} from "./StyledMessageBox";
import MessageAvatar from "../../../assets/girl-avatar.png";

const MyMessageItem: React.SFC<IStyledMessageProps> = () => {
  return (
    <StyledMessageContainer>
      <StyledMessageBox>
        <StyledAvatarBox>
          <StyledMessageAvatar src={MessageAvatar} alt="message avatar" />
        </StyledAvatarBox>

        <StyledContentBox>
          <StyledMessage>Hej co tam?</StyledMessage>
        </StyledContentBox>
      </StyledMessageBox>
    </StyledMessageContainer>
  );
};

interface IStyledMessageProps {
  mymessage?: any;
}

export default MyMessageItem;
