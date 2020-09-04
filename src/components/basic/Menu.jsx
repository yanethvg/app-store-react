import React from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
        <Button color="inherit" component={RouterLink} to="/signin">
          Sign In
        </Button>
        <Button color="inherit" component={RouterLink} to="/signup">
          Sign up
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Menu);
