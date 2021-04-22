import React from "react";
import PropTypes from "prop-types";

const ContactsItem = (props) => {
  const USER = props.dataUser;
  const PREV_USER = props.listUsers[props.idUser - 1];

  const onChangeDataModal = () => {
    props.modalStatus(true);
    props.changeModalContent(USER);
  };

  const templateTitleBtn = (
    <h2
      className="contacts-content__title contacts-wrap"
      key={USER.name.charAt(0)}
    >
      {USER.name.charAt(0).toUpperCase()}
    </h2>
  );

  const templateBtn = (
    <button
      className={"contacts-content__elem"}
      onClick={onChangeDataModal}
      key={USER.id}
    >
      {USER.name}
    </button>
  );

  const onChangeTemplate = () => {
    if (PREV_USER === undefined) {
      return (
        <>
          {templateTitleBtn}
          {templateBtn}
        </>
      );
    }
    if (USER.name.charAt(0) !== PREV_USER.name.charAt(0)) {
      return (
        <>
          {templateTitleBtn}
          {templateBtn}
        </>
      );
    } else {
      return <>{templateBtn}</>;
    }
  };

  return <>{onChangeTemplate()}</>;
};

ContactsItem.propTypes = {
  idUser: PropTypes.number,
  listUsers: PropTypes.array,
  dataUser: PropTypes.object,
  data: PropTypes.array,
  // modalStatus: PropTypes.func.isRequired,
  // changeModalContent: PropTypes.func.isRequired,
};

export default ContactsItem;