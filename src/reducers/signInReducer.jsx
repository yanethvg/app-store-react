import {
  START_SIGNIN,
  COMPLETE_SIGNIN,
  ERROR_SIGNIN,
  START_SIGNOUT,
  COMPLETE_SIGNOUT,
  ERROR_SIGNOUT,
} from "../types";

const initialState = {
  error: null,
  redirectToRefer: null,
  auth: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_SIGNIN:
      return {
        ...state,
        error: null,
        redirectToRefer: false,
      };
    case COMPLETE_SIGNIN:
      return {
        ...state,
        auth: action.payload,
        error: false,
        redirectToRefer: true,
      };
    case ERROR_SIGNIN:
      return {
        ...state,
        error: action.payload,
        redirectToRefer: false,
        auth: undefined,
      };
    case START_SIGNOUT:
      return {
        ...state,
        error: null,
      };
    case COMPLETE_SIGNOUT:
      return {
        ...state,
        error: null,
        auth: undefined,
      };
    case ERROR_SIGNOUT:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
