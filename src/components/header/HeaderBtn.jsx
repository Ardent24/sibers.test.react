import React from "react";
import PropTypes from 'prop-types';

export default function HeaderBtn(props) {
  return (
    <button
      className="contacts-header__add"
      onClick={() => props.modalStatus(true)}
    />
  );
}

HeaderBtn.propTypes = {
  modalStatus: PropTypes.func.isRequired
};