import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// material ui lab
import { Alert, AlertTitle } from "@material-ui/lab";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getSignin } from "../../actions/signinAction";
import { useStylesSignin } from "../styles/auth/useStyles";
import { signinForm } from "../forms/Signin";

export default function Signin() {
  const [email, saveEmail] = useState("");
  const [password, savePassword] = useState("");
  const dispatch = useDispatch();

  const redirectToRefer = useSelector((state) => state.auth.redirectToRefer);
  const error = useSelector((state) => state.auth.error);
  const signin = (user) => dispatch(getSignin(user));

  const clickSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    signin(user);
  };

  // material ui
  const classes = useStylesSignin();
  if (redirectToRefer) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <>
      {error ? (
        <Alert variant="filled" severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      ) : null}
      {signinForm(classes, saveEmail, savePassword, clickSubmit)}
    </>
  );
}
