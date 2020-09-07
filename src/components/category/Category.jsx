import React, { useState } from "react";
// material ui lab
import { Alert, AlertTitle } from "@material-ui/lab";
// redux
import { useDispatch, useSelector } from "react-redux";
import { createCategoryAction } from "../../actions/createCategoryAction";
import { useStylesCategory } from "../styles/category/useStyles";
import { CategoryForm } from "../forms/Category";

const Category = () => {
  const [name, saveName] = useState("");

  const dispatch = useDispatch();
  const createCategory = (category, token) =>
    dispatch(createCategoryAction(category, token));
  const token = useSelector((state) => state.auth.auth.token);
  const error = useSelector((state) => state.categories.error);
  const message = useSelector((state) => state.categories.message);

  const clickSubmit = (e) => {
    e.preventDefault();
    let category = {};
    if (name.trim() !== "") {
      category = {
        name,
      };
    }

    createCategory(category, token);
    if (!error) {
      saveName("");
    }
  };

  // material ui
  const classes = useStylesCategory();
  return (
    <>
      {message ? (
        <Alert variant="filled" severity={error ? "error" : "info"}>
          <AlertTitle>{error ? "Error" : "Info"}</AlertTitle>
          {message}
        </Alert>
      ) : null}
      {CategoryForm(classes, name, saveName, clickSubmit)}
    </>
  );
};

export default Category;
