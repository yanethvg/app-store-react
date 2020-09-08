import React, { useState, useEffect } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { createCategoryAction } from "../../actions/createCategoryAction";
import { useStylesCategory } from "../styles/category/useStyles";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { categoryForm } from "../forms/Category";
import { updateCategoryAction } from "../../actions/updateCategoryAction";

const Category = ({ open, handleClose, categorySelected }) => {
  /*const stateInitial = categorySelected ? categorySelected.name : "";
  console.log(stateInitial);*/
  const [name, saveName] = useState("");

  const dispatch = useDispatch();
  const createCategory = (category, token) =>
    dispatch(createCategoryAction(category, token));
  const updateCategory = (id, category, token) =>
    dispatch(updateCategoryAction(id, category, token));

  const token = useSelector((state) => state.auth.auth.token);
  const error = useSelector((state) => state.categories.error);
  const message = useSelector((state) => state.categories.message);

  useEffect(() => {
    categorySelected ? saveName(categorySelected.name) : saveName("");
  }, [categorySelected, saveName]);

  const clickSubmit = (e) => {
    e.preventDefault();
    let category = {};
    console.log("name", name);
    if (name && name.trim() !== "") {
      category = {
        name,
      };
    }
    categorySelected
      ? updateCategory(categorySelected.id, category, token)
      : createCategory(category, token);

    if (!error) {
      saveName("");
      handleClose();
    }
  };

  // material ui
  const classes = useStylesCategory();
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paperModal}>
            {categoryForm(
              classes,
              name,
              saveName,
              clickSubmit,
              error,
              message,
              categorySelected
            )}
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Category;
