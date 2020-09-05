import {
  START_CREATE_CATEGORY,
  COMPLETE_CREATE_CATEGORY,
  ERROR_CREATE_CATEGORY,
} from "../types";

const initialState = {
  categories: [],
  error: null,
  loading: false,
  category: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_CREATE_CATEGORY:
      return {
        ...state,
        error: null,
      };
    case COMPLETE_CREATE_CATEGORY:
      return {
        ...state,
        error: null,
        categories: [...state.categories, action.payload],
      };
    case ERROR_CREATE_CATEGORY:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
}
