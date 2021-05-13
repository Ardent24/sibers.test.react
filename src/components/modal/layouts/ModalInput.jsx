//CORE
import React from "react";
import PropTypes from "prop-types";

const ModalInput = ({ validHook }) => (
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

ModalInput.propTypes = {
  validHook: PropTypes.object.isRequired,
};

export default ModalInput;
