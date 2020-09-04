import {
  START_SIGNIN,
  COMPLETE_SIGNIN,
  ERROR_SIGNIN,
  AUTHENTICATESTORAGE,
} from "../types";

const initialState = {
  error: null,
  redirectToRefer: false,
  auth: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_SIGNIN:
      return {
        ...state,
        error: null,
        redirectToRefer: true,
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
        error: true,
        redirectToRefer: false,
        auth: {},
      };
    case AUTHENTICATESTORAGE:
      return {
        ...state,
        auth: action.payload,
        error: false,
        redirectToRefer: true,
      };
    default:
      return state;
  }
}
