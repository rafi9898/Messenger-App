import React from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledHeaderMessage,
  StyledHeaderTitle,
  StyledMessageContainer,
  StyledMessageBox,
  StyledAvatarBox,
  StyledMessageAvatar,
  StyledContentBox,
  StyledMessage,
  StyledEnterMessageBox,
  StyledEnterMessage,
  StyledConfigBtn,
  StyledSendBtn
} from "./StyledMessageBox";
import MessageAvatar from "../../../assets/girl-avatar.png";

const MessageBox = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledHeaderMessage>
          <StyledHeaderTitle>Anna Nowak</StyledHeaderTitle>
        </StyledHeaderMessage>

        <StyledMessageContainer>
          <StyledMessageBox>
            <StyledAvatarBox>
              <StyledMessageAvatar src={MessageAvatar} alt="message avatar" />

              <StyledContentBox>
                <StyledMessage>Hej co tam?</StyledMessage>
              </StyledContentBox>
            </StyledAvatarBox>
          </StyledMessageBox>
        </StyledMessageContainer>

        <StyledEnterMessageBox>
          <StyledEnterMessage type="text" placeholder="Napisz wiadomość" />
          <StyledConfigBtn />
          <StyledConfigBtn />
          <StyledSendBtn />
        </StyledEnterMessageBox>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default MessageBox;
