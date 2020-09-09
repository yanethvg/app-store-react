import {
  START_CREATE_CATEGORY,
  COMPLETE_CREATE_CATEGORY,
  ERROR_CREATE_CATEGORY,
  START_GET_CATEGORIES,
  COMPLETE_GET_CATEGORIES,
  ERROR_GET_CATEGORIES,
  START_UPDATE_CATEGORY,
  COMPLETE_UPDATE_CATEGORY,
  ERROR_UPDATE_CATEGORY
} from '../types'

const initialState = {
  categories: [],
  error: null,
  loading: false,
  category: {},
  messageError: null,
  messageSuccess: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_CREATE_CATEGORY:
      return {
        ...state,
        error: null,
        messageError: null
      }
    case COMPLETE_CREATE_CATEGORY:
      return {
        ...state,
        error: false,
        messageSuccess: action.payload.message,
        categories: [...state.categories, action.payload.category]
      }
    case ERROR_CREATE_CATEGORY:
      return {
        ...state,
        error: true,
        messageError: action.payload
      }
    case START_GET_CATEGORIES:
      return {
        ...state,
        error: null,
        loading: true
      }
    case COMPLETE_GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        error: false,
        loading: false
      }
    case ERROR_GET_CATEGORIES:
      return {
        ...state,
        categories: [],
        error: true,
        loading: false,
        messageError: action.payload,
        messageSuccess: null
      }
    case START_UPDATE_CATEGORY:
      return {
        ...state,
        error: null,
        loading: true
      }
    case COMPLETE_UPDATE_CATEGORY:
      return {
        ...state,
        error: false,
        messageError: null,
        loading: false,
        messageSuccess: action.payload.message,
        categories: state.categories.map(category =>
          category.id === action.payload.category.id
            ? (category = action.payload.category)
            : category
        )
      }
    case ERROR_UPDATE_CATEGORY:
      return {
        ...state,
        error: true,
        loading: false,
        messageError: action.payload
      }
    default:
      return state
  }
}
