import { combineReducers } from "redux";
import signinReducer from "./signinReducer";
import signupReducer from "./signupReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  auth: signinReducer,
  signup: signupReducer,
  categories: categoriesReducer,
});
