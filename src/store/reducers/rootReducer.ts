import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import modalReducer from "./modalReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  modal: modalReducer
});

export default rootReducer;
