import React from "react";
import PropTypes from "prop-types";

import {sortUsers} from "../modules/sort-users";

const ModalFooter = (props) => {
  const editModalContent = () => {
    const newListUsers = [...props.listUsers, props.newUser];
    const LOCALE_STORAGE = JSON.parse(localStorage.getItem("users"));

    LOCALE_STORAGE.push(props.newUser);
    localStorage.setItem("users", JSON.stringify(LOCALE_STORAGE));

    props.onChangeUsers(sortUsers(newListUsers));
    props.resetModal();
  };

  return (
    <footer className="contacts-modal__footer">
      <button className="contacts-modal__closed" onClick={editModalContent}>
        OK
      </button>
    </footer>
  );
};

ModalFooter.propTypes = {
  onChangeUsers: PropTypes.func,
  listUsers: PropTypes.array,
  newUser: PropTypes.object
};

export default ModalFooter;