import React from "react";
import Modal from "react-modal";
import Emoji from "react-emoji-render";
import {
  StyledContainer,
  StyledHeaderTitle,
  StyledSpan,
  StyledCloseBtn
} from "./EmoticonsStyled";
import { connect } from "react-redux";

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

const EmoticonsModal: React.SFC<IEmoticonsProps> = ({
  setModalStatus,
  modalStatus
}) => {
  Modal.setAppElement("#root");

  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <Modal
      isOpen={modalStatus}
      style={customStyles}
      contentLabel="Emoticons Modal"
    >
      <StyledContainer>
        <StyledCloseBtn onClick={closeModal} />
        <StyledHeaderTitle>Oznaczenia Emotikon</StyledHeaderTitle>
        <StyledSpan>
          <Emoji text=":)" /> - :)
        </StyledSpan>

        <StyledSpan>
          <Emoji text=":D" /> - :D
        </StyledSpan>

        <StyledSpan>
          <Emoji text=":P" /> - :P
        </StyledSpan>

        <StyledSpan>
          <Emoji text=":(" /> - :(
        </StyledSpan>

        <StyledSpan>
          <Emoji text=":/" /> - :/
        </StyledSpan>
      </StyledContainer>
    </Modal>
  );
};

const mapStateToProps = (state: any) => {
  return {
    modalStatus: state.modal.modalStatus
  };
};

interface IEmoticonsProps {
  isOpenModal?: boolean;
  modalStatus?: any;
  setModalStatus?: any;
}

export default connect(mapStateToProps)(EmoticonsModal);
