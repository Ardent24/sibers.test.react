// import {userAlphabet} from '@/controllers/usersAlphabet';
// import {controlContacts} from '@/controllers/controlContacts';
//
// function createContacts(app) {
//   app.innerHTML = '';
//
//   const LOCALE_STORAGE = JSON.parse(localStorage.getItem('users'));
//   const users = userAlphabet(LOCALE_STORAGE);
//
//   users.forEach((user, i, arrayUsers) => {
//     if (arrayUsers[i - 1] == undefined) return;
//
//     if (i == 1) {
//       app.insertAdjacentHTML('beforeend', `
//             <h2 class="contacts-content__title contacts-wrap">${user.name.charAt(0).toUpperCase()}</h2>
//       `)
//     }
//
//     if (user.name.charAt(0) !== arrayUsers[i - 1].name.charAt(0)) {
//       app.insertAdjacentHTML('beforeend', `
//             <h2 class="contacts-content__title contacts-wrap">${user.name.charAt(0).toUpperCase()}</h2>
//       `)
//     }
//
//     app.insertAdjacentHTML('beforeend', `
//           <button class="contacts-content__elem"
//             data-phone="${user.phone}" data-email="${user.email}"
//             data-country="${user.address.country}" data-city="${user.address.city}">
//             ${user.name}
//           </button>
//     `)
//   });
//
//   controlContacts(app);
// }
//
// export {createContacts};

import React from "react";
import ContactsBtn from "./Contacts-btn";

const Contacts = (props) => {
  const userList =
    props.data &&
    props.data.map((el, i) => {
      return (
        <ContactsBtn
          key={i}
          data={el}
          modalStatus={props.modalStatus}
          changeModalContent={props.changeModalContent}
        />
      );
    });

  return (
    <div className="contacts-wrapper">
      <div className="contacts-content">{userList}</div>
    </div>
  );
};

export default Contacts;
