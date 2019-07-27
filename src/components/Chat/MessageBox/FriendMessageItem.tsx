import React from "react";
import {
  StyledMessageContainer,
  StyledMessageBox,
  StyledContentBox,
  StyledMessage
} from "./StyledMessageBox";

const FriendMessageItem: React.SFC<IStyledMessageProps> = () => {
  return (
    <StyledMessageContainer>
      <StyledMessageBox mymessage>
        <StyledContentBox mymessage>
          <StyledMessage text="Hej co tam?" mymessage />
        </StyledContentBox>
      </StyledMessageBox>
    </StyledMessageContainer>
  );
};

interface IStyledMessageProps {
  mymessage?: any;
}

export default FriendMessageItem;
