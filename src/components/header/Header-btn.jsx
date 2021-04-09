import React from "react";

export default function HeaderBtn(props) {
  return (
    <button
      className="contacts-header__add"
      onClick={() => props.modalStatus(true)}
    />
  );
}
