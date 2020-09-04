import React, { useState } from "react";
// material ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// material ui lab
import { Alert, AlertTitle } from "@material-ui/lab";
// react router
import { Link as RouterLink, Redirect } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getSignin } from "../../actions/signinAction";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const signinForm = (classes, saveEmail, savePassword, clickSubmit) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => saveEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => savePassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={clickSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

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
  const classes = useStyles();
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
