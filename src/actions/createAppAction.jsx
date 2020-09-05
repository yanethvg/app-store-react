import {
  START_CREATE_CATEGORY,
  COMPLETE_CREATE_CATEGORY,
  ERROR_CREATE_CATEGORY,
} from "../types";

export function createCategort(category) {
  return (dispatch) => {
    dispatch(startCreateCategory());
    // get auth api
    fetch(`${process.env.REACT_APP_API_URL}/api/categories`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        if (response.err) {
          dispatch(errorCreateCategory(response.err));
        } else {
          dispatch(completeCreateCategory(response.message));
        }
      })
      .catch((error) => {
        dispatch(errorCreateCategory(error));
      });
  };
}

export const startCreateCategory = () => ({
  type: START_CREATE_CATEGORY,
});

export const completeCreateCategory = (message) => ({
  type: COMPLETE_CREATE_CATEGORY,
  payload: message,
});

export const errorCreateCategory = (message) => ({
  type: ERROR_CREATE_CATEGORY,
  payload: message,
});
