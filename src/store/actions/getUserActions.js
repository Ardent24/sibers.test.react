import { GET_INFO_USER, RESET_INFO_USER, ADD_INFO_USER } from "./types";

export const getInfoUser = (data) => ({
  type: GET_INFO_USER,
  payload: data,
});

export const resetInfoUser = (data) => ({
  type: RESET_INFO_USER,
  payload: data,
});

export const addInfoUser = (type, val, id) => ({
  type: ADD_INFO_USER,
  payloadType: type,
  payloadVal: val,
  payloadId: id,
});
