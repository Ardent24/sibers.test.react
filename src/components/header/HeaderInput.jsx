//CORE
import React from "react";
import { useDispatch } from "react-redux";
//ACTIONS
import { filterByUsers } from "../../store/actions/usersActions";

const HeaderInp = () => {
  const dispatch = useDispatch();

  const searchUsers = (ev) => dispatch(filterByUsers(ev.target.value));

  return (
    <input
      type="search"
      className="contacts-header__search"
      placeholder="Search..."
      onChange={searchUsers}
    />
  );
};

export default HeaderInp;
