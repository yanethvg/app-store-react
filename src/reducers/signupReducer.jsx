import { START_SIGNUP, COMPLETE_SIGNUP, ERROR_SIGNUP } from "../types";
const initialState = {
  error: false,
  message: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_SIGNUP:
      return {
        ...state,
        error: false,
        message: null,
      };
    case COMPLETE_SIGNUP:
      return {
        ...state,
        error: false,
        message: action.payload,
      };
    case ERROR_SIGNUP:
      return {
        ...state,
        error: true,
        message: action.payload,
      };
    default:
      return state;
  }
}
