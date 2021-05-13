//CORE
import React from "react";
import { useDispatch } from "react-redux";
//ACTIONS
import { showModal } from "../../store/actions/isActiveModalActions";
import { changeNewUser } from "../../store/actions/getUserAction";

const HeaderBtn = () => {
  const dispatch = useDispatch();

  const onClickBtn = () => {
    dispatch(changeNewUser());
    dispatch(showModal());
  };

  return <button className="contacts-header__add" onClick={onClickBtn} />;
};

export default HeaderBtn;
