import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/basic/Home";
import Menu from "./components/basic/Menu";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PrivateRoute from "./components/auth/PrivateRoute";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Footer from "./components/basic/Footer";
import CategoryContainer from "./containers/Categories";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

function MainRouter() {
  const classes = useStyles();
  return (
    <div>
      <Switch>
        <>
          <Box className={classes.root}>
            <Menu></Menu>
            <Box m={4}>
              <Route path="/" exact component={Home}></Route>
              <Route path="/signin" exact component={Signin}></Route>
              <Route path="/signup" exact component={Signup}></Route>
              <PrivateRoute
                path="/get/categories"
                exact
                component={CategoryContainer}
              ></PrivateRoute>
            </Box>
            <Footer></Footer>
          </Box>
        </>
      </Switch>
    </div>
  );
}

export default MainRouter;
