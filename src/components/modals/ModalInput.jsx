import React from "react";
import PropTypes from "prop-types";

const ModalInput = (props) => {
  const textModal = props.modalContent
    ? props.modalContent[props.infoGroup]
    : `Enter your ${props.infoGroup}`;

  const onChangeUserInfo = (event) => {
    const valueInp = event.target.value;
    let valueUpCase = "";

    if (props.infoGroup === "name") {
      valueUpCase = valueInp[0].toUpperCase() + valueInp.slice(1);
    } else {
      valueUpCase = event.target.value;
    }

    props.onChangeNewUser({
      ...props.newUser,
      [props.infoGroup]: valueUpCase,
    });
  };

  return (
    <input
      type="text"
      className="contacts-modal__inp"
      onBlur={onChangeUserInfo}
      placeholder={textModal}
    />
  );
};

ModalInput.propTypes = { infoGroup: PropTypes.string.isRequired };

export default ModalInput;
