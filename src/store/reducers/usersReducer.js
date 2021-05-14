//MODULES
import { sortUsers } from "../../modules/sortUsers";
//TYPES
import {
  LOADING_USERS,
  FILTER_BY_VALUE,
  ADD_NEW_USER,
  LOADING_LS_USERS,
  EDIT_USER,
} from "../actions/types";
//LocalStorageLibrary
import localStorage from "store";

const initialState = {
  users: [],
  filterUsers: [],
};

export const listUsers = (state = initialState, action) => {
  const lastState = [...state.users];
  const user = action.payload;
  switch (action.type) {
    case LOADING_USERS:
      return {
        users: action.payload,
        filterUsers: action.payload,
      };
    case LOADING_LS_USERS:
      const loadedState = localStorage.get("users");

      return {
        users: loadedState.users,
        filterUsers: loadedState.filterUsers,
      };
    case FILTER_BY_VALUE:
      const value = action.payload;
      const filteredUsers = lastState.filter((user) => {
        return user.name.toLowerCase().includes(value);
      });
      return {
        ...state,
        filterUsers: filteredUsers,
      };
    case ADD_NEW_USER:
      const FILTERED_USERS = sortUsers([...lastState, user]);

      localStorage.set("users", {
        users: FILTERED_USERS,
        filterUsers: FILTERED_USERS,
      });
      return {
        users: FILTERED_USERS,
        filterUsers: FILTERED_USERS,
      };
    case EDIT_USER:
      const filter = lastState.filter((el) => el.id !== user.id);
      filter.push(user);

      const filterUser = sortUsers(filter);
      const newState = {
        users: filterUser,
        filterUsers: filterUser,
      }

      localStorage.set("users", newState);
      return newState;
    default:
      return state;
  }
};
