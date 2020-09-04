import { START_SIGNIN, COMPLETE_SIGNIN, ERROR_SIGNIN } from "../types";

export function getSignin(user) {
  return (dispatch) => {
    dispatch(startSignin());
    // get auth api
    fetch(`${process.env.REACT_APP_API_URL}/api/auth/signin`, {
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
          dispatch(errorSignin(response.err));
        } else {
          dispatch(completeSignin(response));
        }
      })
      .catch((error) => {
        dispatch(errorSignin(error));
      });
  };
}

export const startSignin = () => ({
  type: START_SIGNIN,
});

export const completeSignin = (auth) => ({
  type: COMPLETE_SIGNIN,
  payload: auth,
});

export const errorSignin = (error) => ({
  type: ERROR_SIGNIN,
  payload: error,
});
