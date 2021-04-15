import React from "react";
import PropTypes from 'prop-types';

import ModalLabel from "./ModalLabel";
import ModalInput from "./ModalInput";

const ModalGroup = (props) => {
  return (
    <div className="contacts-modal__group">
      <ModalLabel infoGroup={props.infoGroup} />
      <ModalInput
        modalContent={props.modalContent}
        infoGroup={props.infoGroup}
        onChangeNewUser={props.onChangeNewUser}
        newUser={props.newUser}
      />
    </div>
  );
};

ModalGroup.propTypes = {
  infoGroup: PropTypes.string.isRequired,
  modalContent: PropTypes.func
}

export default ModalGroup;