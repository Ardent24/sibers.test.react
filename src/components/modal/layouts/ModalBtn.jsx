//CORE
import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
//ACTIONS
import { addNewUser, editUser } from "../../../store/actions/usersActions";

const ModalBtn = ({ taskText, hideModal, isDisabled }) => {
  const user = useSelector((state) => state.infoUser);
  const dispatch = useDispatch();

  const onClkBtn = () => {
    if (taskText === "ADD") dispatch(addNewUser(user));
    if (taskText === "EDIT") dispatch(editUser(user));
    hideModal();
  };

  return (
    <button
      className="contacts-modal__btn"
      onClick={onClkBtn}
      disabled={isDisabled}
    >
      {taskText}
    </button>
  );
};

ModalBtn.propTypes = {
  taskText: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default ModalBtn;
