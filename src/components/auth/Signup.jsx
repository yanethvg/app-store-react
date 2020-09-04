import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// material ui lab
import { Alert, AlertTitle } from "@material-ui/lab";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getSignup } from "../../actions/signupAction";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">App Store</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const signupForm = (
  classes,
  saveFirstName,
  saveLastName,
  saveEmail,
  savePassword,
  clickSubmit
) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => saveFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => saveLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => saveEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => savePassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={clickSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} variant="body2" to="/signin">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default function Signup() {
  const [firstname, saveFirstName] = useState("");
  const [lastname, saveLastName] = useState("");
  const [email, saveEmail] = useState("");
  const [password, savePassword] = useState("");
  const dispatch = useDispatch();

  const error = useSelector((state) => state.signup.error);
  const message = useSelector((state) => state.signup.message);

  const signup = (user) => dispatch(getSignup(user));

  const classes = useStyles();

  const clickSubmit = (e) => {
    e.preventDefault();
    const name = `${firstname} ${lastname}`;
    const user = {
      name,
      email,
      password,
    };

    signup(user);
  };

  return (
    <>
      {message ? (
        <Alert severity={error ? "error" : "info"}>
          <AlertTitle>{error ? "Error" : "Info"}</AlertTitle>
          {message} <RouterLink to="/signin">Signin</RouterLink>
        </Alert>
      ) : null}
      {signupForm(
        classes,
        saveFirstName,
        saveLastName,
        saveEmail,
        savePassword,
        clickSubmit
      )}
    </>
  );
}
