import { FILTER_BY_VALUE } from "./types";

export const filterByUsers = (filter) => ({
  type: FILTER_BY_VALUE,
  payload: filter,
});
