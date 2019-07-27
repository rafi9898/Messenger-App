import React from "react";
import {
  StyledMessageContainer,
  StyledMessageBox,
  StyledAvatarBox,
  StyledMessageAvatar,
  StyledContentBox,
  StyledMessage,
  StyledNameFirend,
  Styled404Room
} from "./StyledMessageBox";
import MessageAvatar from "../../../assets/user-avatar.png";
import { StyledLoadSpinner } from "../SearchBox/SearchStyled";
import LoadSpinnerImage from "../../../assets/load-spinner.svg";
import moment from "moment";

const MyMessageItem: React.SFC<IStyledMessageProps> = ({ message, userId }) => {
  const messageList =
    message && message ? (
      message.map((item: any, key: any) => {
        return (
          <StyledMessageBox key={key}>
            <StyledAvatarBox>
              <StyledMessageAvatar
                src={item.picture ? item.picture : MessageAvatar}
                alt="message avatar"
              />
            </StyledAvatarBox>

            <StyledContentBox mymessage={item.authorId === userId ? 1 : 0}>
              <StyledNameFirend mymessage={item.authorId === userId ? 1 : 0}>
                {item.createdBy} (
                {item.createdAt
                  ? moment(item.createdAt.toDate()).calendar()
                  : null}
                )
              </StyledNameFirend>
              <StyledMessage
                mymessage={item.authorId === userId ? 1 : 0}
                text={String(item.message)}
              />
            </StyledContentBox>
          </StyledMessageBox>
        );
      })
    ) : (
      <Styled404Room>Brak wiadomości</Styled404Room>
    );

  return (
    <StyledMessageContainer>
      {messageList ? (
        messageList
      ) : (
        <StyledLoadSpinner src={LoadSpinnerImage} alt="spinner image" />
      )}
    </StyledMessageContainer>
  );
};

interface IStyledMessageProps {
  mymessage?: any;
  message?: any;
  userId?: any;
}

export default MyMessageItem;
