import React from "react";
import PropTypes from "prop-types";

const ModalLabel = (props) => (
  <label className="contacts-modal__label" htmlFor={props.infoGroup}>
    {props.infoGroup}
  </label>
);

ModalLabel.propTypes = {
  infoGroup: PropTypes.string.isRequired,
};

export default ModalLabel;
