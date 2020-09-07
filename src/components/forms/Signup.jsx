import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Box,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Copyright from "./Copyright";

export const SignupForm = (
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
) => (
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form} noValidate onSubmit={clickSubmit}>
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
              value={firstname}
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
              value={lastname}
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
              value={email}
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
              value={password}
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
