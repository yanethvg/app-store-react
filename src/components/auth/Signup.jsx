import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// material ui lab
import { Alert, AlertTitle } from "@material-ui/lab";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getSignup } from "../../actions/signupAction";
import { useStylesSignup } from "../styles/auth/useStyles";
import { SignupForm } from "../forms/Signup";

export default function Signup() {
  const [firstname, saveFirstName] = useState("");
  const [lastname, saveLastName] = useState("");
  const [email, saveEmail] = useState("");
  const [password, savePassword] = useState("");
  const dispatch = useDispatch();

  const error = useSelector((state) => state.signup.error);
  const message = useSelector((state) => state.signup.message);

  const signup = (user) => dispatch(getSignup(user));

  const classes = useStylesSignup();

  const clickSubmit = (e) => {
    e.preventDefault();
    const name = `${firstname} ${lastname}`;
    const user = {
      name,
      email,
      password,
    };

    signup(user);

    if (!error) {
      saveFirstName("");
      saveLastName("");
      saveEmail("");
      savePassword("");
    }
  };

  return (
    <>
      {message ? (
        <Alert severity={error ? "error" : "info"}>
          <AlertTitle>{error ? "Error" : "Info"}</AlertTitle>
          {message} <RouterLink to="/signin">Signin</RouterLink>
        </Alert>
      ) : null}
      {SignupForm(
        classes,
        firstname,
        saveFirstName,
        lastname,
        saveLastName,
        email,
        saveEmail,
        password,
        savePassword,
        clickSubmit
      )}
    </>
  );
}
