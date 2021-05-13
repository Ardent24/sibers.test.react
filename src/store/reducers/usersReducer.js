//TYPES
import { LOADING_USERS, FILTER_BY_VALUE } from "../actions/types";

const initialState = {
  users: [],
  filterUsers: [],
};

export const listUsers = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USERS:
      return {
        users: action.payload,
        filterUsers: action.payload,
      };
    case FILTER_BY_VALUE:
      const newUsers = [...state.users];
      const value = action.payload;
      const filteredUsers = newUsers.filter((user) => {
        return user.name.toLowerCase().includes(value);
      });

      return {
        ...state,
        filterUsers: filteredUsers,
      };
    default:
      return state;
  }
};
