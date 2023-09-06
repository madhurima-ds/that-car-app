import React from "react";

import classes from "./TableHeader.module.css";

const TableHeader = (props) => {
  const columnHeaders = props.columnHeaders;

  return (
    <div id={classes["resp-table-header"]}>
      {columnHeaders.map((header) => (
        <div className={classes["table-header-cell"]}>{header}</div>
      ))}
    </div>
  );
};

export default TableHeader;
