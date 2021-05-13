//CORE
import React from "react";
import PropTypes from "prop-types";

const ModalInput = ({ validHook }) => {

  return (
    <React.Fragment>
      <input
        type="text"
        className="contacts-modal__inp"
        value={validHook.value}
        placeholder={validHook.placeholder}
        onChange={validHook.onChange}
        onBlur={validHook.onBlur}
      />
      <p>{validHook.textError}</p>
    </React.Fragment>
  );
};

ModalInput.propTypes = {
  // inputType: PropTypes.string.isRequired,
  // infoUser: PropTypes.string.isRequired,
};

export default ModalInput;
