import {
  START_SIGNIN,
  COMPLETE_SIGNIN,
  ERROR_SIGNIN,
  AUTHENTICATESTORAGE,
} from "../types";

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
        console.log(response);
        if (response.err) {
          dispatch(errorSignin());
        } else {
          //dispatch(completeSignin(response));
          dispatch(authenticateStorage(response));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(errorSignin());
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

export const errorSignin = () => ({
  type: ERROR_SIGNIN,
});

export const authenticateStorage = (auth) => ({
  type: AUTHENTICATESTORAGE,
  payload: auth,
});
