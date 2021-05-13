import React from "react";
// import PropTypes from "prop-types";
import HeaderBtn from "./HeaderBtn";
import HeaderInp from "./HeaderInput";

const Header = () => {
  return (
    <header className="contacts-header">
      <div className="contacts-header__wrapper">
        <h1 className="contacts-title">Contacts</h1>
        <HeaderBtn />
        <HeaderInp />
      </div>
    </header>
  );
};

export default Header;
