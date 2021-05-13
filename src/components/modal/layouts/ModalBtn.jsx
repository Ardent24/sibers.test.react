//CORE
import React from "react";
import PropTypes from "prop-types";

const ModalBtn = ({ taskText, hideModal, isDisabled }) => {
  return (
    <button className="contacts-modal__btn" onClick={hideModal} disabled={isDisabled}>
      {taskText}
    </button>
  );
};

ModalBtn.propTypes = {
  taskText: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default ModalBtn;
