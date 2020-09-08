import {
  START_CREATE_CATEGORY,
  COMPLETE_CREATE_CATEGORY,
  ERROR_CREATE_CATEGORY,
  START_GET_CATEGORIES,
  COMPLETE_GET_CATEGORIES,
  ERROR_GET_CATEGORIES,
  START_UPDATE_CATEGORY,
  COMPLETE_UPDATE_CATEGORY,
  ERROR_UPDATE_CATEGORY,
} from "../types";

const initialState = {
  categories: [],
  error: null,
  loading: false,
  category: {},
  message: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_CREATE_CATEGORY:
      return {
        ...state,
        error: null,
        message: null,
      };
    case COMPLETE_CREATE_CATEGORY:
      return {
        ...state,
        error: false,
        message: "Category created successfully",
        categories: [...state.categories, action.payload],
      };
    case ERROR_CREATE_CATEGORY:
      return {
        ...state,
        error: true,
        message: action.payload,
      };
    case START_GET_CATEGORIES:
      return {
        ...state,
        error: null,
        loading: true,
        message: null,
      };
    case COMPLETE_GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        error: false,
        loading: false,
        message: null,
      };
    case ERROR_GET_CATEGORIES:
      return {
        ...state,
        categories: [],
        error: true,
        loading: false,
        message: "Data upload error",
      };
    case START_UPDATE_CATEGORY:
      return {
        ...state,
        error: null,
        message: null,
        loading: true,
      };
    case COMPLETE_UPDATE_CATEGORY:
      return {
        ...state,
        error: false,
        loading: false,
        message: "Category updated successfully",
        categories: state.categories.map((category) =>
          category.id === action.payload.id
            ? (category = action.payload)
            : category
        ),
      };
    case ERROR_UPDATE_CATEGORY:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
