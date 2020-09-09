import {
  START_UPDATE_CATEGORY,
  COMPLETE_UPDATE_CATEGORY,
  ERROR_UPDATE_CATEGORY
} from '../types'

export function updateCategoryAction (id, category, token) {
  return dispatch => {
    dispatch(startUpdateCategory())
    // get auth api
    fetch(`${process.env.REACT_APP_API_URL}/api/categories/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(category)
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (response) {
        if (response.err) {
          dispatch(errorUpdateCategory(response.err.message))
        } else {
          dispatch(completeUpdateCategory(response))
        }
      })
      .catch(error => {
        dispatch(errorUpdateCategory(error))
      })
  }
}

export const startUpdateCategory = () => ({
  type: START_UPDATE_CATEGORY
})

export const completeUpdateCategory = response => ({
  type: COMPLETE_UPDATE_CATEGORY,
  payload: response
})

export const errorUpdateCategory = message => ({
  type: ERROR_UPDATE_CATEGORY,
  payload: message
})
