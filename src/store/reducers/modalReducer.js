import { SHOW_MODAL, HIDE_MODAL, ADD_CONTACT } from "../actions/types";

const initialState = {
  isOpenModal: false,
  newContact: false
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
        newContact: false
      };
    case ADD_CONTACT:
      return {
        ...state,
        newContact: true
      };
    default:
      return state;
  }
};
