import { combineReducers } from "redux";
import signInReducer from "./signInReducer";

export default combineReducers({
  auth: signInReducer,
});
