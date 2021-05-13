//CORE
import React from "react";
import { useSelector } from "react-redux";
//COMPONENTS
import ContactsItem from "./ContactsItem";

const Contacts = () => {
  const users = useSelector((state) => state.listUsers.filterUsers);

  const templateUsers = users.map((user, i, listUsers) => {
    return (
      <ContactsItem
        key={user.id}
        indexUser={i}
        infoUser={user}
        listUsers={listUsers}
      />
    );
  });

  return (
    <div className="contacts-wrapper">
      <div className="contacts-content">{templateUsers}</div>
    </div>
  );
};

export default Contacts;
