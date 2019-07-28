import React, { useState } from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledSearch,
  StyledNewItemBtn,
  StyledLogoutButton,
  StyledLoadSpinner,
  StyledRoomLink
} from "./SearchStyled";
import PersonsList from "./PersonsList";
import { createAddNewRoomModal } from "../../../store/actions/modalActions";
import { connect } from "react-redux";
import AddNewRoomModal from "../../Modals/AddNewRoom/AddNewRoomModal";
import { signOut } from "../../../store/actions/authActions";
import LoadSpinnerImage from "../../../assets/load-spinner.svg";
import { showSearchBox } from "../../../store/actions/modalActions";

const Search: React.SFC<ISearchProps> = ({
  createAddNewRoomModal,
  rooms,
  signOut,
  showSearchBox
}) => {
  const [searchRooms, setSearchRooms] = useState([]);
  const [isSearchRooms, setStatusSearch] = useState(false);

  const showRoomList =
    rooms &&
    rooms.map((room: any) => {
      return (
        <StyledRoomLink
          onClick={() => showSearchBox(false)}
          key={room.id}
          to={"/room/" + room.id}
        >
          <PersonsList
            name={room.roomName}
            lastMessage={`Stworzył: ${room.createdBy}`}
            color={room.roomColor}
          />
        </StyledRoomLink>
      );
    });

  const showSearchRoomList =
    searchRooms &&
    searchRooms.map((room: any) => {
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

  const searchRoom = (e: any) => {
    const searchRoomName = e.target.value.toUpperCase();
    if (searchRoomName && rooms.length > 0) {
      const searchRooms = rooms.filter((room: any) => {
        return room.roomName.toUpperCase().includes(searchRoomName);
      });

      setSearchRooms(searchRooms);
      setStatusSearch(true);
    } else {
      setSearchRooms([]);
      setStatusSearch(false);
    }
  };

  const showCurrentList = !isSearchRooms ? showRoomList : showSearchRoomList;

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledSearch onChange={searchRoom} type="text" placeholder="Szukaj" />
        <StyledNewItemBtn onClick={() => createAddNewRoomModal(true)}>
          Dodaj Pokój
        </StyledNewItemBtn>

        {showCurrentList ? (
          showCurrentList
        ) : (
          <StyledLoadSpinner src={LoadSpinnerImage} alt="load spinner" />
        )}
      </StyledContainer>
      <AddNewRoomModal setModalStatus={createAddNewRoomModal} />
      <StyledLogoutButton onClick={signOut}>Wyloguj</StyledLogoutButton>
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    createAddNewRoomModal: (state: boolean) =>
      dispatch(createAddNewRoomModal(state)),

    signOut: () => dispatch(signOut()),
    showSearchBox: (state: boolean) => dispatch(showSearchBox(state))
  };
};

interface ISearchProps {
  createAddNewRoomModal: any;
  rooms?: any;
  signOut?: any;
  showSearchBox?: any;
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
