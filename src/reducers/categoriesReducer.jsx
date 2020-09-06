import {
  START_CREATE_CATEGORY,
  COMPLETE_CREATE_CATEGORY,
  ERROR_CREATE_CATEGORY
} from '../types'

const initialState = {
  categories: [],
  error: null,
  loading: false,
  category: {},
  message: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_CREATE_CATEGORY:
      return {
        ...state,
        error: null,
        message: null
      }
    case COMPLETE_CREATE_CATEGORY:
      return {
        ...state,
        error: false,
        message: 'Category created successfully',
        categories: [...state.categories, action.payload]
      }
    case ERROR_CREATE_CATEGORY:
      return {
        ...state,
        error: true,
        message: action.payload
      }

    default:
      return state
  }
}
