import React, { Fragment } from "react";

import classes from "./TableRow.module.css";

const TableRow = (props) => {
  const row = props.row;

  const seletedRowHandler = () => {
    props.onSelect(row);
  };

  return (
    <Fragment>
      <div className={classes["resp-table-row"]} onClick={seletedRowHandler}>
        {row.map(
          (item) =>
            item.isVisiable && (
              <div className={classes["table-body-cell"]}>{item.value}</div>
            )
        )}
      </div>
    </Fragment>
  );
};

export default TableRow;
