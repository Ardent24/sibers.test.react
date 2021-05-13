import { SHOW_MODAL, HIDE_MODAL, DISABLED_BTN, ACTIVE_BTN } from "../actions/types";

const initialState = {
  isOpenModal: false,
  disabledBtn: true
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isOpenModal: !!state
      };
    case HIDE_MODAL:
      return {
        ...state,
        isOpenModal: !state,
        disabledBtn: true
      };
    default:
      return state;
  }
};
