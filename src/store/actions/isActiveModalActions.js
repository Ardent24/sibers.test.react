import { SHOW_MODAL, HIDE_MODAL, ADD_CONTACT } from "./types";

export const showModal = () => {
  return { type: SHOW_MODAL };
};

export const hideModal = () => {
  return { type: HIDE_MODAL };
};

export const addContact = () => {
  return { type: ADD_CONTACT };
};