//TYPES
import {
  GET_INFO_USER,
  CHANGE_NEW_USER,
  RESET_USER_INFO,
} from "../actions/types";

const initialState = {
  onChangeNewUser: false,
  user: {
    name: "",
    phone: "",
    email: "",
  },
};

export const infoUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CHANGE_NEW_USER:
      return {
        ...state,
        onChangeNewUser: !!state,
      };
    case RESET_USER_INFO:
      return {
        ...state,
        user: {
          name: "",
          phone: "",
          email: "",
        },
        onChangeNewUser: !state,
      };
    default:
      return state;
  }
};
