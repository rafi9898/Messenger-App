import React, { useState } from "react";
import Modal from "react-modal";
import {
  StyledContainer,
  StyledHeaderTitle,
  StyledCloseBtn,
  StyledForm,
  StyledInputLabel,
  StyledTextInput,
  StyledColorInput,
  StyledAddRoomBtn
} from "./NewRoomStyled";
import { connect } from "react-redux";
import { createRoom } from "../../../store/actions/roomActions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    overflow: "hidden"
  }
};

const AddNewRoomModal: React.SFC<IAddRoomProps> = ({
  setModalStatus,
  addRoomModalStatus,
  createRoom
}) => {
  Modal.setAppElement("#root");

  const [roomName, setRoomName] = useState("");
  const [roomColor, setRoomColor] = useState("#000000");

  const closeModal = () => {
    setModalStatus(false);
  };

  const setDataRoom = (e: any) => {
    e.target.name === "RoomName"
      ? setRoomName(e.target.value)
      : setRoomColor(e.target.value);
  };

  const AddNewRoom = (e: any) => {
    e.preventDefault();
    if (roomName && roomColor) {
      const state = { roomName, roomColor };
      createRoom(state);
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={addRoomModalStatus}
      style={customStyles}
      contentLabel="Emoticons Modal"
    >
      <StyledContainer>
        <StyledCloseBtn onClick={closeModal} />
        <StyledHeaderTitle>Dodaj Nowy Pokój</StyledHeaderTitle>
      </StyledContainer>

      <StyledForm>
        <StyledInputLabel>Nazwa pokoju:</StyledInputLabel>
        <StyledTextInput
          onChange={setDataRoom}
          name="RoomName"
          type="text"
          required
        />

        <StyledInputLabel>Kolor pokoju:</StyledInputLabel>
        <StyledColorInput
          type="color"
          onChange={setDataRoom}
          name="RoomColor"
          required
        />

        <StyledAddRoomBtn onClick={AddNewRoom} type="submit">
          Dodaj pokój
        </StyledAddRoomBtn>
      </StyledForm>
    </Modal>
  );
};

const mapStateToProps = (state: any) => {
  return {
    addRoomModalStatus: state.createAddRoomModal.addRoomModalStatus
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    createRoom: (room: object) => dispatch(createRoom(room))
  };
};

interface IAddRoomProps {
  addRoomModalStatus?: any;
  setModalStatus?: any;
  createRoom?: any;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewRoomModal);
