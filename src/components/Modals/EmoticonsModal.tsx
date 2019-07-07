import React, { useState, useEffect } from "react";
import Modal from "react-modal";

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

const EmoticonsModal: React.SFC<IEmoticonsProps> = ({ isOpenModal }) => {
  const [modalIsOpen, setModalStatus] = useState(false);

  function closeModal() {
    setModalStatus(false);
  }

  useEffect(() => {
    isOpenModal && isOpenModal === true
      ? setModalStatus(true)
      : setModalStatus(false);
  }, [isOpenModal]);

  Modal.setAppElement("#root");

  console.log(modalIsOpen);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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

interface IEmoticonsProps {
  isOpenModal?: boolean;
}

export default EmoticonsModal;
