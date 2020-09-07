import React from "react";
import { Typography } from "@material-ui/core";
import Categories from "../components/category/Categories";
import { useStylesCategories } from "../components/styles/category/useStyles";

function CategoryContainer() {
  const classes = useStylesCategories();
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
