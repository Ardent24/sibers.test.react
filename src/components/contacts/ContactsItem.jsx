//CORE
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
//ACTIONS
import { getInfoUser } from "../../store/actions/getUserAction";
import { showModal } from "../../store/actions/isActiveModalActions";

const ContactsItem = ({ indexUser, infoUser, listUsers }) => {
  const dispatch = useDispatch();

  const prevUser = listUsers[indexUser - 1];
  const firstLetter = infoUser.name.charAt(0);
  const firstLetterPrevUser = prevUser && prevUser.name.charAt(0);

  //record info user to state
  const onClickBtn = () => {
    dispatch(getInfoUser(infoUser));
    dispatch(showModal());
  };

  const templateTitleBtn = (
    <h2 className="contacts-content__title contacts-wrap" key={firstLetter}>
      {firstLetter.toUpperCase()}
    </h2>
  );

  const templateBtn = (
    <button
      className={"contacts-content__elem"}
      onClick={onClickBtn}
      key={infoUser.id}
    >
      {infoUser.name}
    </button>
  );

  const templateContactItem = () => {
    if (!prevUser) {
      return (
        <React.Fragment>
          {templateTitleBtn}
          {templateBtn}
        </React.Fragment>
      );
    }
    if (firstLetter !== firstLetterPrevUser) {
      return (
        <React.Fragment>
          {templateTitleBtn}
          {templateBtn}
        </React.Fragment>
      );
    }
    if (firstLetter === firstLetterPrevUser) {
      return <React.Fragment>{templateBtn}</React.Fragment>;
    }
  };

  return <>{templateContactItem()}</>;
};

ContactsItem.propTypes = {
  indexUser: PropTypes.number.isRequired,
  infoUser: PropTypes.object.isRequired,
  listUsers: PropTypes.array.isRequired,
};

export default ContactsItem;
