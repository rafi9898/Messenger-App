import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
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
    <div>
      <Modal
        isOpen={modalStatus}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
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
