import React, { useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { createCategoryAction } from "../../actions/createCategoryAction";
import { useStylesCategory } from "../styles/category/useStyles";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { categoryForm } from "../forms/Category";

const Category = ({ open, handleClose }) => {
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
            {categoryForm(classes, name, saveName, clickSubmit, error, message)}
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Category;
