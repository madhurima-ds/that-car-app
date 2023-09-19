import React from "react";

import classes from "./TableFooter.module.css";

const TableFooter = (props) => {
  const columnHeaders = props.columnHeaders;

  return (    
    <div id={classes["resp-table-footer"]}>
      {columnHeaders.map(() => (
        <div className={classes["table-footer-cell"]} key={Math.random()} />
      ))}      
    </div>
  );
};

export default TableFooter;
