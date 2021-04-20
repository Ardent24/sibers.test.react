import React from "react";
import PropTypes from "prop-types";

export default function HeaderBtn(props) {
  const onClickBtn = () => {
    props.modalStatus(true);
    props.changeModalContent(null);
  };
  return <button className="contacts-header__add" onClick={onClickBtn} />;
}

HeaderBtn.propTypes = {
  modalStatus: PropTypes.func.isRequired,
};
