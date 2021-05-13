import { SHOW_MODAL, HIDE_MODAL, DISABLED_BTN, ACTIVE_BTN } from "./types";

export const showModal = () => {
  return { type: SHOW_MODAL };
};

export const hideModal = () => {
  return { type: HIDE_MODAL };
};

export const disabledBtn = (bool) => ({
  type: DISABLED_BTN,
  payload: bool,
});

export const activeBtn = (bool) => ({
  type: ACTIVE_BTN,
  payload: bool,
});
