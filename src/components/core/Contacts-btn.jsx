import React from "react";

const ContactsBtn = (props) => {
  const onBtnClick = () => {
    props.modalStatus(true);
    props.changeModalContent(props.data);
  };
  return (
    <button className={"contacts-content__elem"} onClick={onBtnClick}>
      {props.data.name}
    </button>
  );
};

export default ContactsBtn;
