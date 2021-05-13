//CORE
import React from "react";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
//COMPONENTS
import ModalBtn from "./ModalBtn";

const ModalFooter = ({ hideModal }) => {
  //const disabledBtn = useSelector((state) => state.isOpenModal.disabledBtn);
  return (
    <footer className={"contacts-modal__footer"}>
      <ModalBtn taskText={"cancel"} hideModal={hideModal}/>
      {/*<ModalBtn taskText={"ADD"} hideModal={hideModal} isDisabled={disabledBtn} />*/}
    </footer>
  );
};

ModalBtn.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

export default ModalFooter;