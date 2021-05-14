//TYPES
import {
  INP_DIRTY,
  INP_NOT_VALID,
  INP_VALID,
  IS_VALID_FORM,
  RESET_VALIDATION,
  FIRST_ONLOAD_VALID
} from "../actions/types";

const emptyState = {
  name: {
    isValid: false,
    isDirty: false,
    errorMessage: "incorrect name",
  },
  email: {
    isValid: false,
    isDirty: false,
    errorMessage: "incorrect email",
  },
  phone: {
    isValid: false,
    isDirty: false,
    errorMessage: "incorrect phone",
  },
  isValidForm: false,
};
const initialState = { ...emptyState };

export const validationReducer = (state = initialState, action) => {
  const type = action.payload;

  switch (action.type) {
    case INP_DIRTY:
      return {
        ...state,
        [type]: { ...state[type], isDirty: true },
      };
    case INP_VALID:
      return {
        ...state,
        [type]: { ...state[type], isValid: true },
      };
    case INP_NOT_VALID:
      return {
        ...state,
        [type]: { ...state[type], isValid: false },
      };
    case IS_VALID_FORM:
      return {
        ...state,
        isValidForm: action.payload,
      };
    case RESET_VALIDATION:
      return emptyState;
    case FIRST_ONLOAD_VALID:
      return {
        name: {
          isValid: action.payload,
          isDirty: false,
          errorMessage: "incorrect name",
        },
        email: {
          isValid: action.payload,
          isDirty: false,
          errorMessage: "incorrect email",
        },
        phone: {
          isValid: action.payload,
          isDirty: false,
          errorMessage: "incorrect phone",
        },
        isValidForm: action.payload,
      }
    default:
      return state;
  }
};