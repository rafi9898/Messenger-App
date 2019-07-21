import React from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledSearch,
  StyledNewItemBtn,
  StyledLogoutButton,
  StyledRoomLink
} from "./SearchStyled";
import PersonsList from "./PersonsList";
import { createAddNewRoomModal } from "../../../store/actions/modalActions";
import { connect } from "react-redux";
import AddNewRoomModal from "../../Modals/AddNewRoom/AddNewRoomModal";

const Search: React.SFC<ISearchProps> = ({ createAddNewRoomModal, rooms }) => {
  const showRoomList =
    rooms &&
    rooms.map((room: any) => {
      return (
        <StyledRoomLink key={room.id} to={"/room/" + room.id}>
          <PersonsList
            name={room.roomName}
            lastMessage={`Stworzył: ${room.createdBy}`}
            color={room.roomColor}
          />
        </StyledRoomLink>
      );
    });

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledSearch type="text" placeholder="Szukaj" />
        <StyledNewItemBtn onClick={() => createAddNewRoomModal(true)}>
          Dodaj Pokój
        </StyledNewItemBtn>

        {showRoomList}
      </StyledContainer>
      <AddNewRoomModal setModalStatus={createAddNewRoomModal} />
      <StyledLogoutButton>Wyloguj</StyledLogoutButton>
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    createAddNewRoomModal: (state: boolean) =>
      dispatch(createAddNewRoomModal(state))
  };
};

interface ISearchProps {
  createAddNewRoomModal: any;
  rooms?: any;
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
