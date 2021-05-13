//CORE
import React from "react";
import PropTypes from "prop-types";
//COMPONENTS
import ModalInput from "./ModalInput";
import ModalLabel from "./ModalLabel";

const ModalGroup = ({ validHook }) => (
  <div className="contacts-modal__group">
    <ModalLabel inputType={validHook.type} />
    <ModalInput validHook={validHook} />
  </div>
);

ModalGroup.propTypes = {
  validHook: PropTypes.object.isRequired,
};

export default ModalGroup;
