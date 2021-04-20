import React from "react";
import PropTypes from "prop-types";

import { sortUsers } from "../modules/sort-users";

const ModalBtn = (props) => {
  const editModalContent = () => {
    const newUser = props.newUser;
    newUser.id = props.listUsers.length;

    const newListUsers = [...props.listUsers, newUser];
    const LOCALE_STORAGE = JSON.parse(localStorage.getItem("users"));

    LOCALE_STORAGE.push(newUser);
    localStorage.setItem("users", JSON.stringify(LOCALE_STORAGE));

    props.onChangeUsers(sortUsers(newListUsers));
    props.resetModal();
  };

  return (
    <button className="contacts-modal__closed" onClick={editModalContent}>
      OK
    </button>
  );
};

ModalBtn.propTypes = {
  newUser: PropTypes.object,
  onChangeUsers: PropTypes.func,
  resetModal: PropTypes.func,
  listUsers: PropTypes.array,
};

export default ModalBtn;
