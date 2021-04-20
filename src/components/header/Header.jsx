import React from "react";
import PropTypes from "prop-types";
import HeaderBtn from "./HeaderBtn";
import HeaderInp from "./HeaderInput";

export default function Header(props) {
  return (
    <header className="contacts-header">
      <div className="contacts-header__wrapper">
        <h1 className="contacts-title">Contacts</h1>
        <HeaderBtn
          modalStatus={props.modalStatus}
          changeModalContent={props.changeModalContent}
        />
        <HeaderInp onChangeSearchUser={props.onChangeSearchUser} />
      </div>
    </header>
  );
}

Header.propTypes = {
  modalStatus: PropTypes.func.isRequired,
  onChangeSearchUser: PropTypes.func,
};
