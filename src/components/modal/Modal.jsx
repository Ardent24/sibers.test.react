//CORE
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
//COMPONENTS
import ModalGroup from "./layouts/ModalGroup";
import ModalFooter from "./layouts/ModalFooter";
//ACTIONS
import { hideModal } from "../../store/actions/isActiveModalActions";
import { addInfoUser, resetInfoUser } from "../../store/actions/getUserAction";
import {
  inpDirty,
  inputNotValid,
  inputValid,
  isValidForm,
} from "../../store/actions/validationActions";
//REGEXES
import { regexPhone, regexMail, regexName } from "../../modules/regex";

//CUSTOM HOOK VALIDATION
const useInput = (type) => {
  const usersLength = useSelector((state) => state.listUsers.users).length;
  const user = useSelector((state) => state.infoUser);
  const validations = useSelector((state) => state.validations);
  const changeNewContact = useSelector((state) => state.isOpenModal.newContact)

  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [textError, setTextError] = useState("");

  const errorMessage = validations[type].errorMessage;
  const isDirty = validations[type].isDirty;

  const nameValid = validations.name.isValid;
  const emailValid = validations.email.isValid;
  const phoneValid = validations.phone.isValid;

  //VALIDATION FORM
  useEffect(() => {
    const isRegex = (value) => {
      if (type === "name") return regexName(value);
      if (type === "email") return regexMail(value);
      if (type === "phone") return regexPhone(value);
    };

    if (isDirty && !isRegex(value)) {
      setTextError(errorMessage);
      dispatch(inputNotValid(type));
    } else if (isDirty && isRegex(value)) {
      setTextError("");
      dispatch(inputValid(type));
    } else {
      setTextError("");
    }
  }, [dispatch, errorMessage, isDirty, type, value]);

  //ACTIVE BTN MODAL
  useEffect(() => {
    if (nameValid && emailValid && phoneValid) {
      dispatch(isValidForm());
    }
  }, [dispatch, emailValid, nameValid, phoneValid]);

  //OUTPUT PLACEHOLDER/VALUE
  useEffect(() => {
    if (user[type]) {
      setValue(user[type]);
    } else {
      setPlaceholder(`Enter your ${type}`);
      setValue(user[type]);
    }
  }, [type, user]);

  const onChange = (ev) => {
    const val = ev.target.value;

    setValue(val);
    dispatch(inpDirty(type));

    if (type === "name") {
      const str = val[0].toUpperCase() + val.slice(1);
      dispatch(addInfoUser(type, str, usersLength));
    } else {
      dispatch(addInfoUser(type, val, usersLength));
    }
  };
  const onBlur = (ev) => {
    const val = ev.target.value;

    dispatch(inpDirty(type));
    setValue(val);
  };

  return {
    type,
    onChange,
    onBlur,
    value,
    placeholder,
    textError,
  };
};

const Modal = () => {
  const { newContact, isOpenModal } = useSelector((state) => state.isOpenModal);
  const user = useSelector((state) => state.infoUser);
  const dispatch = useDispatch();

  const hideModalClick = () => {
    dispatch(hideModal());
    dispatch(resetInfoUser());
  };

  const outSideModalClick = (ev) => {
    const modal = document.querySelector(".contacts-modal");
    ev.preventDefault();

    if (ev.target === modal) {
      modal.classList.remove("active");
      modal.firstChild.classList.remove("active");
      hideModalClick();
    }
  };

  return (
    <div
      className={cx("contacts-modal", { active: isOpenModal })}
      onClick={outSideModalClick}
    >
      <form className={cx("contacts-modal__wrapper", { active: isOpenModal })}>
        <header className="contacts-modal__header">
          <h4 className="contacts-modal__title">
            {newContact ?  "ADD CONTACT" : user.name}
          </h4>
          <button className="contacts-modal__close" onClick={hideModalClick}>
            &times;
          </button>
        </header>
        <main className="contacts-modal__main">
          <ModalGroup validHook={useInput("name")} />
          <ModalGroup validHook={useInput("phone")} />
          <ModalGroup validHook={useInput("email")} />
        </main>
        <ModalFooter hideModal={hideModalClick} />
      </form>
    </div>
  );
};

export default Modal;
