import React from "react";

const ModalGroup = (props) => {
  const users = props.modalContent;

  return (
    <>
      <div className="contacts-modal__group">
        <label className="contacts-modal__label">Name</label>
        <input
          type="text"
          className="contacts-modal__inp"
          placeholder={users ? users.name : "Enter your name"}
        />
      </div>
      <div className="contacts-modal__group">
        <label className="contacts-modal__label">Phone</label>
        <input
          type="text"
          className="contacts-modal__inp"
          placeholder={users ? users.phone : "Enter your phone"}
        />
      </div>
      <div className="contacts-modal__group">
        <label className="contacts-modal__label">Email</label>
        <input
          type="text"
          className="contacts-modal__inp"
          placeholder={users ? users.email : "Enter your email"}
        />
      </div>
      <div className="contacts-modal__group">
        <label className="contacts-modal__label">Country</label>
        <input
          type="text"
          className="contacts-modal__inp"
          placeholder={users ? users.address.country : "Enter your country"}
        />
      </div>
      <div className="contacts-modal__group">
        <label className="contacts-modal__label">City</label>
        <input
          type="text"
          className="contacts-modal__inp"
          placeholder={users ? users.address.city : "Enter your city"}
        />
      </div>
    </>
  );
};

export default ModalGroup;
