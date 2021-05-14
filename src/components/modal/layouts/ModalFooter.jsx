//CORE
import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
//COMPONENTS
import ModalBtn from "./ModalBtn";

const ModalFooter = ({ hideModal }) => {
  const isValidForm = useSelector((state) => state.validations.isValidForm);
  const onChangeNewContact = useSelector(
    (state) => state.isOpenModal.newContact
  );

  return (
    <footer className={"contacts-modal__footer"}>
      <ModalBtn taskText={"cancel"} hideModal={hideModal} isDisabled={false} />
      <ModalBtn
        taskText={onChangeNewContact ? "ADD" : "EDIT"}
        hideModal={hideModal}
        isDisabled={!isValidForm}
      />
    </footer>
  );
};

ModalBtn.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

export default ModalFooter;
