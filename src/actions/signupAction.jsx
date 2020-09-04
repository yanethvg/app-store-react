import { START_SIGNUP, COMPLETE_SIGNUP, ERROR_SIGNUP } from "../types";

export function getSignup(user) {
  return (dispatch) => {
    dispatch(startSignup());
    // get auth api
    fetch(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        if (response.err) {
          dispatch(errorSignup(response.err));
        } else {
          dispatch(completeSignup(response.message));
        }
      })
      .catch((error) => {
        dispatch(errorSignup(error));
      });
  };
}

export const startSignup = () => ({
  type: START_SIGNUP,
});

export const completeSignup = (message) => ({
  type: COMPLETE_SIGNUP,
  payload: message,
});

export const errorSignup = (message) => ({
  type: ERROR_SIGNUP,
  payload: message,
});
