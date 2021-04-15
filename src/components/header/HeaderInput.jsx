import React from "react";
import PropTypes from "prop-types";

function HeaderInp(props) {

  const onChangeInp = (event) => props.onChangeSearchUser(event.target.value);

  return (
    <input
      type="search"
      className="contacts-header__search"
      placeholder="Search..."
      onChange={onChangeInp}
    />
  );
}


HeaderInp.propTypes = {
  listUsers: PropTypes.array,
};

export default HeaderInp;