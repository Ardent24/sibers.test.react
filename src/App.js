//Core react
import React from "react";
//Components
import Header from "./components/header/Header";
import Contacts from "./components/contacts/Contacts";
import Modal from "./components/modal/Modal";

const App = () => {
  return (
    <React.Fragment>
      <div className="contacts">
        <Header/>
        <Contacts/>
        <Modal />
      </div>
    </React.Fragment>
  );
}

export default App;
