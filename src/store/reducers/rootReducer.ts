import authReducer from "./authReducer";
import roomReducer from "./roomReducer";
import { modalReducer } from "./modalReducer";
import { createAddRoomModalReducer } from "./modalReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  room: roomReducer,
  modal: modalReducer,
  createAddRoomModal: createAddRoomModalReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
