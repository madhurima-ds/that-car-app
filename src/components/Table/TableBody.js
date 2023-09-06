import React from "react";

import classes from './TableBody.module.css';

import TableRow from "./TableRow";

const TableBody = (props) => {
  const tableData = props.tableData;

  return (    
    <div id={classes["resp-table-body"]}>
      {tableData.map((row) => (
        <TableRow row={row} onSelect={props.onRowSelect} />
      ))}
    </div>
  );
};

export default TableBody;
