import React, { useState } from "react";

function HeaderInp(props) {
  const [inpValue, setInpValue] = useState("");

  const filterUsers =
    props.listUsers &&
    props.listUsers.filter((user) => {
      return user.name.toLowerCase().includes(inpValue.toLowerCase());
    });
  console.log(filterUsers);

  return (
    <input
      type="search"
      className="contacts-header__search"
      placeholder="Search..."
      onChange={(event) => setInpValue(event.target.value)}
    />
  );
}

export default HeaderInp;
