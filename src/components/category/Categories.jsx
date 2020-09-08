import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../actions/getCategoriesAction";

import PaginationActionsTable from "../utils/PaginationActionsTable";
import { Container } from "@material-ui/core";

const Categories = ({ handleOpen, onSelectedCategory }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.token);

  useEffect(() => {
    const loadCategories = () => dispatch(getCategoriesAction(token));
    loadCategories();
  }, [dispatch, token]);
  /*const loading = useSelector(state => state.categories.loading)*/
  const categories = useSelector((state) => state.categories.categories);

  const columns = [
    { id: "id", label: "Id", minWidth: 170 },
    { id: "name", label: "Name", minWidth: 230 },
  ];

  const rows = categories.sort((a, b) => b.id - a.id);
  return (
    <div>
      <Container component="main" maxWidth="md">
        <PaginationActionsTable
          rows={rows}
          columns={columns}
          handleOpen={handleOpen}
          onSelected={onSelectedCategory}
        ></PaginationActionsTable>
      </Container>
    </div>
  );
};

export default Categories;
