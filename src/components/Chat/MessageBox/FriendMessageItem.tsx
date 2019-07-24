import React from "react";
import {
  StyledMessageContainer,
  StyledMessageBox,
  StyledContentBox,
  StyledMessage,
  StyledNameFirend
} from "./StyledMessageBox";

const FriendMessageItem: React.SFC<IStyledMessageProps> = () => {
  return (
    <StyledMessageContainer>
      <StyledMessageBox mymessage>
        <StyledContentBox mymessage>
          <StyledMessage mymessage>Hej co tam?</StyledMessage>
        </StyledContentBox>
      </StyledMessageBox>
    </StyledMessageContainer>
  );
};

interface IStyledMessageProps {
  mymessage?: any;
}

export default FriendMessageItem;
