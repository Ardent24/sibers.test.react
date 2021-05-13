//CORE
import React from "react";
import PropTypes from "prop-types";
//COMPONENTS
import ModalInput from "./ModalInput";
import ModalLabel from "./ModalLabel";

// const ModalGroup = ({ inputType, infoUser, validHook }) => {
//   return (
//     <div className="contacts-modal__group">
//       <ModalLabel inputType={inputType} />
//       <ModalInput infoUser={infoUser} inputType={inputType} />
//     </div>
//   );
// };

const ModalGroup = ({ validHook }) => {
  return (
    <div className="contacts-modal__group">
      <ModalLabel validHook={validHook.typeValid} />
      <ModalInput validHook={validHook} />
    </div>
  );
};

ModalGroup.propTypes = {
  // inputType: PropTypes.string.isRequired,
  // infoUser: PropTypes.string.isRequired,
};

export default ModalGroup;
