//CORE
import { createStore } from "redux";
import { enhancerStore } from "./debugger";
//REDUCER
import { rootReducer } from "./rootReducer";
//ASYNC ACTIONS
import { fetchUsersAction } from "./actions/loadingUsersAction";
//LocalStorageLibrary
import localStorage from "store";

const loadedState = localStorage.get("state");

export const store = loadedState
  ? createStore(rootReducer, loadedState, enhancerStore)
  : createStore(rootReducer, enhancerStore);

//requestUsers
if (!loadedState) store.dispatch(fetchUsersAction());

store.subscribe(() => {
  // const state = store.getState();
  // console.log(state.isOpenModal.disabledBtn, 'disabl btn')
  // localStorage.set("state", state);
});
