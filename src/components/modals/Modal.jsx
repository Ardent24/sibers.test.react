import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ModalGroup from "./ModalGroup";
import ModalFooter from "./ModalFooter";

const Modal = (props) => {
  const [newUser, setNewUser] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const onChangeNewUser = (dataUser) => setNewUser(dataUser);

  const resetModal = () => {
    props.modalStatus(false);
    props.changeModalContent(null);
  };
  const outSideClick = (event) => {
    event.preventDefault();
    const div = document.querySelector(".contacts-modal");
    if (event.target === div) resetModal();
  };

  const changeClassWrap = classNames("contacts-modal", {
    active: props.isOpenModal,
  });
  const changeClassBox = classNames("contacts-modal__wrapper", {
    active: props.isOpenModal,
  });

  const titleModal = props.modalContent
    ? props.modalContent.name
    : "Add contact";

  return (
    <div className={changeClassWrap} onClick={outSideClick}>
      <div className={changeClassBox}>
        <header className="contacts-modal__header">
          <h4 className="contacts-modal__title">{titleModal}</h4>
          <button className="contacts-modal__close" onClick={resetModal}>
            &times;
          </button>
        </header>
        <main className="contacts-modal__main">
          <ModalGroup
            modalContent={props.modalContent}
            infoGroup="name"
            onChangeNewUser={onChangeNewUser}
            newUser={newUser}
          />
          <ModalGroup
            modalContent={props.modalContent}
            infoGroup="phone"
            onChangeNewUser={onChangeNewUser}
            newUser={newUser}
          />
          <ModalGroup
            modalContent={props.modalContent}
            infoGroup="email"
            onChangeNewUser={onChangeNewUser}
            newUser={newUser}
          />
        </main>
        <ModalFooter
          newUser={newUser}
          onChangeUsers={props.onChangeUsers}
          resetModal={resetModal}
          listUsers={props.listUsers}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  changeModalContent: PropTypes.func,
  modalContent: PropTypes.func,
  isOpenModal: PropTypes.bool,
};

export default Modal;