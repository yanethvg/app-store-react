import React from "react";
import {
  makeStyles,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
} from "@material-ui/core";
import CategoryIcon from "@material-ui/icons/Category";

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
const createAppForm = (classes) => (
  <Container component="main" maxWidth="xs">
    <CssBaseline></CssBaseline>
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <CategoryIcon></CategoryIcon>
      </Avatar>
      <Typography component="h1" variant="h5">
        Create Category
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
        />
      </form>
    </div>
  </Container>
);

const CreateApp = () => {
  // material ui
  const classes = useStyles();
  return <>{createAppForm(classes)}</>;
};

export default CreateApp;
