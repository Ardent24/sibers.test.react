//CORE
import React from "react";
import PropTypes from "prop-types";

const ModalLabel = ({ validHook }) => (
  <label className="contacts-modal__label">{validHook}</label>
);

ModalLabel.propTypes = {
  // inputType: PropTypes.string.isRequired,
};

export default ModalLabel;
