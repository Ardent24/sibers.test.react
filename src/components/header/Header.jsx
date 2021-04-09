import React from "react";
import HeaderBtn from "./Header-btn";
import HeaderInp from "./Header-input";

export default function Header(props) {
  return (
    <header className="contacts-header">
      <div className="contacts-header__wrapper">
        <h1 className="contacts-title">Contacts</h1>
        <HeaderBtn modalStatus={props.modalStatus} />
        <HeaderInp listUsers={props.listUsers} />
      </div>
    </header>
  );
}
