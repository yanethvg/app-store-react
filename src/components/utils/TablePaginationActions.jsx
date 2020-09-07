import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme, IconButton } from "@material-ui/core";
import LastPageIcon from "@material-ui/icons/LastPage";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  icon: {
    background: "#000000",
    color: "#FFFFFF",
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
        className={classes.icon}
      >
        {theme.direction === "rtl" ? (
          <LastPageIcon className={classes.icon} />
        ) : (
          <FirstPageIcon className={classes.icon} />
        )}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        className={classes.icon}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight className={classes.icon} />
        ) : (
          <KeyboardArrowLeft className={classes.icon} />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        className={classes.icon}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft className={classes.icon} />
        ) : (
          <KeyboardArrowRight className={classes.icon} />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
        className={classes.icon}
      >
        {theme.direction === "rtl" ? (
          <FirstPageIcon className={classes.icon} />
        ) : (
          <LastPageIcon className={classes.icon} />
        )}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default TablePaginationActions;
