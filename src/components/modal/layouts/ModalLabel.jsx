//CORE
import React from "react";
import PropTypes from "prop-types";

const ModalLabel = ({ inputType }) => (
  <label className="contacts-modal__label">{inputType}</label>
);

ModalLabel.propTypes = {
  inputType: PropTypes.string.isRequired,
};

export default ModalLabel;
