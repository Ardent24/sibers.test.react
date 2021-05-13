import { FILTER_BY_VALUE, ADD_NEW_USER } from "./types";

export const filterByUsers = (filter) => ({
  type: FILTER_BY_VALUE,
  payload: filter,
});

export const addNewUser = (user) => ({
  type: ADD_NEW_USER,
  payload: user,
});
