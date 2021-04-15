import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { requestUsers } from "./components/modules/request-users";
import { sortUsers } from "./components/modules/sort-users";
import { localeStorageUsers } from "./components/modules/localeStorageUsers";

import Header from "./components/header/Header";
import Contacts from "./components/core/Contacts";
import Modal from "./components/modals/Modal";

export default function App() {
  const [users, setUsers] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    if (!users) {
      (async function func() {
        const promiseUsers = await requestUsers();
        const LS_USERS = localeStorageUsers(promiseUsers);
        setUsers(sortUsers(LS_USERS));
      })();
    } else {
      setUsers(sortUsers(users));
    }
  }, [users]);

  const filterUsers =
    users &&
    users.filter((user) => {
      return user.name.toLowerCase().includes(searchUser.toLowerCase());
    });

  const onChangeSearchUser = (search) => setSearchUser(search);

  const modalStatus = (isOpen) => setOpenModal(isOpen);

  const changeModalContent = (changeModalContent) =>
    setModalContent(changeModalContent);

  const onChangeUsers = (editListUsers) => setUsers(editListUsers);

  return (
    <div className="contacts">
      <Header
        modalStatus={modalStatus}
        listUsers={filterUsers}
        onChangeUsers={onChangeUsers}
        onChangeSearchUser={onChangeSearchUser}
      />
      <Contacts
        data={filterUsers}
        modalStatus={modalStatus}
        changeModalContent={changeModalContent}
      />
      <Modal
        isOpenModal={isOpenModal}
        modalStatus={modalStatus}
        changeModalContent={changeModalContent}
        modalContent={modalContent}
        onChangeUsers={onChangeUsers}
        listUsers={filterUsers}
      />
    </div>
  );
}

App.propTypes = {
  modalStatus: PropTypes.func,
  listUsers: PropTypes.array,
  data: PropTypes.object,
  changeModalContent: PropTypes.func,
  isOpenModal: PropTypes.func,
  modalContent: PropTypes.func,
};
