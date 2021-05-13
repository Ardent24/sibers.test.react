//CORE
import React from "react";
import { useDispatch } from "react-redux";
//ACTIONS
import { showModal } from "../../store/actions/isActiveModalActions";
import { addContact } from "../../store/actions/isActiveModalActions";

const HeaderBtn = () => {
  const dispatch = useDispatch();

  const onClickBtn = () => {
    dispatch(showModal());
    dispatch(addContact());
  };

  return <button className="contacts-header__add" onClick={onClickBtn} />;
};

export default HeaderBtn;
