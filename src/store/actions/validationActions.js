import {
  INP_DIRTY,
  IS_VALID_FORM,
  INP_VALID,
  INP_NOT_VALID,
  RESET_VALIDATION,
  FIRST_ONLOAD_VALID,
} from "./types";

export const inpDirty = (type) => ({
  type: INP_DIRTY,
  payload: type,
});

// export const isValidForm = () => {
//   return { type: IS_VALID_FORM };
// };

export const isValidForm = (bool) => ({
  type: IS_VALID_FORM,
  payload: bool,
});

export const inputValid = (type) => ({
  type: INP_VALID,
  payload: type,
});

export const inputNotValid = (type) => ({
  type: INP_NOT_VALID,
  payload: type,
});

export const resetValidation = () => ({
  type: RESET_VALIDATION,
});

export const firstOnloadValid = (bool)  => ({
  type: FIRST_ONLOAD_VALID,
  payload: bool,
});
