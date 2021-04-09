import React from "react";
import ModalGroup from "./Modal-group";
import ModalFooter from "./Modal-footer";

const Modal = (props) => {
  const resetModal = () => {
    props.modalStatus(false);
    props.changeModalContent(null);
  };

  const outSideClick = (event) => {
    event.preventDefault();
    const div = document.querySelector(".contacts-modal");
    if (event.target === div) resetModal();
  };

  return (
    <div
      onClick={outSideClick}
      className={props.isOpenModal ? "contacts-modal active" : "contacts-modal"}
    >
      <div
        className={
          props.isOpenModal
            ? "contacts-modal__wrapper active"
            : "contacts-modal__wrapper"
        }
      >
        <header className="contacts-modal__header">
          <h4 className="contacts-modal__title">
            {props.modalContent ? props.modalContent.name : "Add contact"}
          </h4>
          <button className="contacts-modal__close" onClick={resetModal}>
            &times;
          </button>
        </header>
        <main className="contacts-modal__main">
          <ModalGroup modalContent={props.modalContent} />
        </main>
        <ModalFooter />
      </div>
    </div>
  );
};

export default Modal;
