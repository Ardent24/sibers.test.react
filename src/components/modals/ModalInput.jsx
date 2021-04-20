import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { sortUsers } from "../modules/sort-users";

const ModalInput = (props) => {
  const [inputState, setInputState] = useState("");
  const [placeholderState, setPlaceholderState] = useState("");
  const infoUser = props.modalContent;
  const infoGroup = props.infoGroup;

  useEffect(() => {
    if (infoUser) {
      setInputState(infoUser[infoGroup]);
      setPlaceholderState("");
    } else {
      setInputState("");
      setPlaceholderState(`Enter your ${infoGroup}`);
    }
  }, [infoGroup, infoUser]);

  const onChangeUserInfo = (event) => {
    const valueInp = event.target.value;
    let valueUpCase = "";

    setInputState(valueInp);

    if (infoUser) {
      const newArrayUsers = [...props.localeStorageUsers].filter((user) => {
        if (user.id === infoUser.id) {
           (user[infoGroup] = valueInp);
        }
        return user
      });

      localStorage.setItem("users", JSON.stringify(newArrayUsers));

      props.onChangeUsers(sortUsers(newArrayUsers));
    }

    if (!infoUser) {
      if (props.infoGroup === "name") {
        valueUpCase = valueInp[0].toUpperCase() + valueInp.slice(1);
      } else {
        valueUpCase = event.target.value;
      }

      props.onChangeNewUser({
        ...props.newUser,
        [props.infoGroup]: valueUpCase,
      });
    }
  };

  return (
    <input
      type="text"
      className="contacts-modal__inp"
      onChange={onChangeUserInfo}
      value={inputState}
      placeholder={placeholderState}
      id={infoGroup}
    />
  );
};

ModalInput.propTypes = {
  modalContent: PropTypes.object,
  infoGroup: PropTypes.string.isRequired,
  onChangeNewUser: PropTypes.func,
  newUser: PropTypes.object,
};

export default ModalInput;
