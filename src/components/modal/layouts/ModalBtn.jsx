//CORE
import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
//ACTIONS
import { addNewUser } from "../../../store/actions/filterUsersAction";
import { resetValidation } from "../../../store/actions/validationActions";

const ModalBtn = ({ taskText, hideModal, isDisabled }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.infoUser);

  const onClkBtn = () => {
    if (taskText === "ADD") {
      dispatch(addNewUser(user));
    }
    hideModal();
    dispatch(resetValidation());
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
