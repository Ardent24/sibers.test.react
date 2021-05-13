//CORE
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
//COMPONENTS
import ModalGroup from "./layouts/ModalGroup";
import ModalFooter from "./layouts/ModalFooter";
//ACTIONS
import { hideModal } from "../../store/actions/isActiveModalActions";
import { resetUserInfo } from "../../store/actions/getUserAction";
//REGEX
import { regexPhone, regexMail, regexName } from "../../modules/regex";

//CUSTOM HOOK VALIDATION
const useInput = (typeValid = "name") => {
  const user = useSelector((state) => state.infoUser.user);

  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  //OUTPUT PLACEHOLDER/VALUE
  useEffect(() => {
    if (user[typeValid]) {
      setValue(user[typeValid]);
    } else {
      setPlaceholder(`Enter your ${typeValid}`);
      setValue(user[typeValid]);
    }
  }, [typeValid, user]);

  const [isDirty, setDirty] = useState(false);
  const [textError, setTextError] = useState("");

  const [validations, setValidations] = useState({
    name: {
      isValid: false,
      isDirty: false,
      errorMessage: "incorrect name",
      rule: regexName,
    },
    email: {
      isValid: false,
      isDirty: false,
      errorMessage: "incorrect email",
      rule: regexMail,
    },
    phone: {
      isValid: false,
      isDirty: false,
      errorMessage: "incorrect phone",
      rule: regexPhone,
    },
  });

  useEffect(() => {
    const isDirty = validations[typeValid].isDirty;
    const isRegex = validations[typeValid].rule(value);
    const error = validations[typeValid].errorMessage;

    if (isDirty && !isRegex) {
      setTextError(error);
    } else if (isDirty && isRegex) {
      setTextError("");
      setValidations({
        ...validations,
        [typeValid]: { ...validations[typeValid], isValid: true },
      });
    } else {
      setTextError("");
    }

    console.log(validations)
  }, [value]);

  const onChange = (ev) => {
    setDirty(true);
    setValue(ev.target.value);

    setValidations({
      ...validations,
      [typeValid]: { ...validations[typeValid], isDirty: true },
    });
  };
  const onBlur = (ev) => {
    setDirty(true);
    setValue(ev.target.value);
    setValidations({
      ...validations,
      [typeValid]: { ...validations[typeValid], isDirty: true },
    });
  };

  return {
    typeValid,
    onChange,
    onBlur,
    value,
    placeholder,
    textError,
  };
};

const Modal = () => {
  const changeModal = useSelector((state) => state.isOpenModal.isOpenModal);
  const user = useSelector((state) => state.infoUser.user);
  const dispatch = useDispatch();

  const hideModalClick = () => {
    dispatch(hideModal());
    dispatch(resetUserInfo());
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
      className={cx("contacts-modal", { active: changeModal })}
      onClick={outSideModalClick}
    >
      <form className={cx("contacts-modal__wrapper", { active: changeModal })}>
        <header className="contacts-modal__header">
          <h4 className="contacts-modal__title">
            {user.name ? user.name : "ADD CONTACT"}
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
