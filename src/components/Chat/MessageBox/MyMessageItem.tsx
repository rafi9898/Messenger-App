import React from "react";
import {
  StyledMessageContainer,
  StyledMessageBox,
  StyledAvatarBox,
  StyledMessageAvatar,
  StyledContentBox,
  StyledMessage,
  StyledNameFirend
} from "./StyledMessageBox";
import MessageAvatar from "../../../assets/hashtag-icon.png";

const MyMessageItem: React.SFC<IStyledMessageProps> = () => {
  return (
    <StyledMessageContainer>
      <StyledMessageBox>
        <StyledAvatarBox>
          <StyledMessageAvatar src={MessageAvatar} alt="message avatar" />
        </StyledAvatarBox>

        <StyledContentBox>
          <StyledNameFirend>Rafał Podraza (3 Lipca 2019)</StyledNameFirend>
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
