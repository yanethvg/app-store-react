import React from "react";
import { Typography } from "@material-ui/core";
import Categories from "../components/category/Categories";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  typografy: {
    color: "#000000",
    marginBottom: "20px",
  },
}));

function CategoryContainer() {
  const classes = useStyles();
  return (
    <>
      <Typography align="center" variant="h5" className={classes.typografy}>
        Categories
      </Typography>
      <Categories />
    </>
  );
}

export default CategoryContainer;
