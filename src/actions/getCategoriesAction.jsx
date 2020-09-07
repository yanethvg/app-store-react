import {
  START_GET_CATEGORIES,
  COMPLETE_GET_CATEGORIES,
  ERROR_GET_CATEGORIES,
} from "../types";

export function getCategoriesAction(token) {
  return (dispatch) => {
    dispatch(startGetCategories());
    // get auth api
    fetch(`${process.env.REACT_APP_API_URL}/api/categories`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        dispatch(completeGetCategories(response.categories));
      })
      .catch((error) => {
        dispatch(errorGetCategories(error));
      });
  };
}

export const startGetCategories = () => ({
  type: START_GET_CATEGORIES,
});

export const completeGetCategories = (categories) => ({
  type: COMPLETE_GET_CATEGORIES,
  payload: categories,
});

export const errorGetCategories = (error) => ({
  type: ERROR_GET_CATEGORIES,
  payload: error,
});
