import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Contacts from "./components/core/Contacts";
import Modal from "./components/modals/Modal";

import { requestUsers } from "./components/modules/request-users";
import { sortUsers } from "./components/modules/sort-users";

export default function App() {
  const [users, setUsers] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const promise = async () => {
      const promiseUsers = await requestUsers();
      setUsers(sortUsers(promiseUsers));
    };
    promise();
  }, []);

  const modalStatus = (isOpen) => setOpenModal(isOpen);

  const changeModalContent = (changeModalContent) =>
    setModalContent(changeModalContent);

  return (
    <div className="contacts">
      <Header modalStatus={modalStatus} listUsers={users} />
      <Contacts
        data={users}
        modalStatus={modalStatus}
        changeModalContent={changeModalContent}
      />
      <Modal
        isOpenModal={isOpenModal}
        modalStatus={modalStatus}
        changeModalContent={changeModalContent}
        modalContent={modalContent}
      />
    </div>
  );
}
