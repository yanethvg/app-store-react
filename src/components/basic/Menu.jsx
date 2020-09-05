import React from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getSignout } from "../../actions/signoutAction";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Menu({ history }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.auth);
  const signout = () => dispatch(getSignout());

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          App Store
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        {!auth && (
          <>
            <Button color="inherit" component={RouterLink} to="/signin">
              Sign In
            </Button>
            <Button color="inherit" component={RouterLink} to="/signup">
              Sign up
            </Button>
          </>
        )}
        {auth && (
          <>
            <Button
              color="inherit"
              component={RouterLink}
              to="/create/categories"
            >
              Create Category
            </Button>
            <Button
              color="inherit"
              onClick={() => signout(() => history.push("/"))}
            >
              Sign out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Menu);
