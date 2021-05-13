//STORE
import {store} from "../store";
//TYPES
import { LOADING_USERS } from "./types";
//MODULES
import { sortUsers } from "../../modules/sortUsers";
//LocalStorageLibrary
import localStorage from "store";


export const fetchUsersRequest = (users) => {
  return {
    type: LOADING_USERS,
    payload: users,
  };
};

export const loadingFetchUsersAction = () => {
  return (dispatch) => {
    fetch("https://demo.sibers.com/users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.map((user) => user);
        const sortingUsers = sortUsers(users);

        dispatch(fetchUsersRequest(sortingUsers));

        const state = store.getState();
        const listUsers =  state.listUsers;
        localStorage.set("users", listUsers);
      });
  };
};
