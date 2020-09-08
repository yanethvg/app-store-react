import {
  START_UPDATE_CATEGORY,
  COMPLETE_UPDATE_CATEGORY,
  ERROR_UPDATE_CATEGORY,
} from "../types";

export function updateCategoryAction(id, token) {
  return (dispatch) => {
    dispatch(startUpdateCategory());
    // get auth api
    fetch(`${process.env.REACT_APP_API_URL}/api/categories/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        if (response.err) {
          dispatch(errorUpdateCategory(response.err.message));
        } else {
          console.log(response.category);
          dispatch(completeUpdateCategory(response.category));
        }
      })
      .catch((error) => {
        dispatch(errorUpdateCategory(error));
      });
  };
}

export const startUpdateCategory = () => ({
  type: START_UPDATE_CATEGORY,
});

export const completeUpdateCategory = (category) => ({
  type: COMPLETE_UPDATE_CATEGORY,
  payload: category,
});

export const errorUpdateCategory = (message) => ({
  type: ERROR_UPDATE_CATEGORY,
  payload: message,
});