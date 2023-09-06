import React from "react";

import classes from "./Table.module.css";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const Table = (props) => {
  return (
    <div className={classes["table-view"]}>
      <div id={classes["resp-table"]}>
        <TableHeader columnHeaders={props.columnHeaders} />
        <TableBody
          tableData={props.tableData}
          onRowSelect={props.onRowSelect}
        />
        <TableFooter columnHeaders={props.columnHeaders} />
      </div>
    </div>
  );
};

export default Table;
