//TYPES
import {
  GET_INFO_USER,
  RESET_INFO_USER,
  ADD_INFO_USER,
} from "../actions/types";

const emptyUser = {
  name: "",
  phone: "",
  email: "",
  id: "",
};

const initialState = {
  ...emptyUser,
};

export const infoUser = (state = initialState, action) => {
  const STATE_USER = action.payload;
  const STATE_TYPE = action.payloadType;
  const STATE_VAL = action.payloadVal;
  const STATE_ID = action.payloadId;

  switch (action.type) {
    case GET_INFO_USER:
      return STATE_USER;
    case ADD_INFO_USER:
      return { ...state, [STATE_TYPE]: STATE_VAL, id: STATE_ID };
    case RESET_INFO_USER:
      return {
        ...emptyUser,
      };
    default:
      return state;
  }
};
