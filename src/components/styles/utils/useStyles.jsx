import { makeStyles } from "@material-ui/core/styles";

export const useStylesPaginationActions = makeStyles({
  table: {
    minWidth: 500,
  },
  button: {
    marginRight: "10px",
  },
  tableHead: {
    background: "#000000",
    color: "#FFFFFF",
  },
  tableFood: {
    background: "#000000",
    color: "#FFFFFF",
  },
});

export const useStylesTablePagination = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  icon: {
    background: "#000000",
    color: "#FFFFFF",
  },
}));
