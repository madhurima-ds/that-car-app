import React from "react";

import classes from "./TableHeader.module.css";

const TableHeader = (props) => {
  const columnHeaders = props.columnHeaders;

  return (
    <div id={classes["resp-table-header"]}>
      {columnHeaders.map((header) => (
        <div className={classes["table-header-cell"]} key={Math.random()} >{header}</div>
      ))}
    </div>
  );
};

export default TableHeader;
