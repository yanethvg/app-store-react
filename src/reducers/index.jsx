import { combineReducers } from "redux";
import signinReducer from "./signinReducer";
import signupReducer from "./signupReducer";

export default combineReducers({
  auth: signinReducer,
  signup: signupReducer,
});
