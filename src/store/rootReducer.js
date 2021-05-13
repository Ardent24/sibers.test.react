//CORE
import { combineReducers } from "redux";
//REDUCERS
import { listUsers } from "./reducers/usersReducer";
import { infoUser } from "./reducers/infoUserReducer";
import { modalReducer } from "./reducers/modalReducer";

export const rootReducer = combineReducers({
  listUsers,
  infoUser,
  isOpenModal: modalReducer,
});
