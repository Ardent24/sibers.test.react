import { GET_INFO_USER, CHANGE_NEW_USER, RESET_USER_INFO } from "./types";

export const getInfoUser = (data) => ({
  type: GET_INFO_USER,
  payload: data,
});

export const changeNewUser = (data) => ({
  type: CHANGE_NEW_USER,
  payload: data,
});

export const resetUserInfo = (data) => ({
  type: RESET_USER_INFO,
  payload: data,
});
