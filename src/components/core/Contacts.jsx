import React from "react";
import PropTypes from "prop-types";

import ContactsItem from "./ContactsItem";

const Contacts = (props) => {
  return (
    <div className="contacts-wrapper">
      <div className="contacts-content">
        {props.data &&
          props.data.map((user, i, arrayUsers) => (
            <ContactsItem
              dataUser={user}
              idUser={i}
              listUsers={arrayUsers}
              modalStatus={props.modalStatus}
              changeModalContent={props.changeModalContent}
              key={i}
            />
          ))}
      </div>
    </div>
  );
};

Contacts.propTypes = {
  dataUser: PropTypes.object,
  idUser: PropTypes.number,
  listUsers: PropTypes.array,
  modalStatus: PropTypes.func.isRequired,
  changeModalContent: PropTypes.func.isRequired,
};

export default Contacts;