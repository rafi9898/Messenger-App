import React from "react";
import Search from "../../Chat/SearchBox/Search";
import MessageBox from "../MessageBox/MessageBox";
import {
  StyledWrapper,
  StyledSearchBox,
  StyledMessageBox
} from "./StyledChatBox";
import { connect } from "react-redux";

const ChatBox: React.SFC<IChatBoxProps> = ({
  rooms,
  roomId,
  userId,
  showSearchBarStatus
}) => {
  return (
    <StyledWrapper>
      <StyledSearchBox isOpen={showSearchBarStatus}>
        <Search rooms={rooms} />
      </StyledSearchBox>

      <StyledMessageBox isOpen={showSearchBarStatus}>
        <MessageBox userId={userId} roomId={roomId} />
      </StyledMessageBox>
    </StyledWrapper>
  );
};

interface IChatBoxProps {
  rooms?: object;
  roomId?: string;
  userId?: string;
  showSearchBarStatus?: any;
}

const mapStateToProps = (state: any) => {
  return {
    showSearchBarStatus: state.createShowSearchBox.showSearchBoxStatus
  };
};

export default connect(mapStateToProps)(ChatBox);
