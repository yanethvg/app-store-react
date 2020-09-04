import { COMPLETE_SIGNOUT, START_SIGNOUT, ERROR_SIGNOUT } from "../types";

export function getSignout() {
  return (dispatch) => {
    dispatch(startSignout());
    localStorage.removeItem("auth");
    // get auth api
    fetch(`${process.env.REACT_APP_API_URL}/api/auth/signout`, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
        dispatch(completeSignout());
      })
      .catch((error) => {
        dispatch(errorSignout());
      });
  };
}

export const startSignout = () => ({
  type: START_SIGNOUT,
});

export const completeSignout = () => ({
  type: COMPLETE_SIGNOUT,
});

export const errorSignout = () => ({
  type: ERROR_SIGNOUT,
});
