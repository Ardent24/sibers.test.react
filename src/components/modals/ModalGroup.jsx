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
        onChangeUsers={props.onChangeUsers}
        localeStorageUsers={props.localeStorageUsers}
      />
    </div>
  );
};

ModalGroup.propTypes = {
  modalContent: PropTypes.object,
  infoGroup: PropTypes.string.isRequired,
  onChangeNewUser: PropTypes.func,
  newUser: PropTypes.object,
  onChangeUsers: PropTypes.func,
  localeStorageUsers: PropTypes.array
}

export default ModalGroup;