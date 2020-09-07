import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableFooter,
  TablePagination,
  TableHead,
  Button,
} from "@material-ui/core";
import TablePaginationActions from "./TablePaginationActions";
import { useStylesPaginationActions } from "../styles/utils/useStyles";

export default function PaginationActionsTable(props) {
  const { columns, rows } = props;
  const classes = useStylesPaginationActions();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align="center"
                className={classes.tableHead}
                style={{ width: 250 }}
              >
                {column.label}
              </TableCell>
            ))}
            <TableCell
              key="actions2"
              align="center"
              className={classes.tableHead}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  key={column.id}
                >
                  {row[column.id]}
                </TableCell>
              ))}
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Update
                </Button>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              //rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
              rowsPerPageOptions={[6]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              className={classes.tableFood}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
