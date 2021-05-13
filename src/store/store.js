//CORE
import { createStore } from "redux";
import { enhancerStore } from "./debugger";
//REDUCER
import { rootReducer } from "./rootReducer";
//ASYNC ACTIONS
import { loadingFetchUsersAction } from "./actions/loadingFetchUsersAction";
//ACTIONS
import { loadingUsersLS } from "./actions/loadingLsUsersAction";
//LocalStorageLibrary
import localStorage from "store";

const loadedState = localStorage.get("users");

export const store = loadedState
  ? createStore(rootReducer, enhancerStore)
  : createStore(rootReducer, enhancerStore);

if (loadedState) {
  store.dispatch(loadingUsersLS());
} else {
  store.dispatch(loadingFetchUsersAction());
}

store.subscribe(() => {});
