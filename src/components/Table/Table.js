import React from "react";
import Panel from "../Panel";
import TableRow from "./TableRow";
import classes from "./Table.module.css";

const Table = (props) => {
  const caption = props.caption;
  const columnHeaders = props.columnHeaders;
  const tableData = props.tableData;

  return (
    <div className={classes["table-list"]}>
      <Panel>
        <div id={classes["resp-table"]}>
          <div id={classes["resp-table-header"]}>
            {columnHeaders.map((header) => (
              <div className={classes["table-header-cell"]}>{header}</div>
            ))}
          </div>
          <div id={classes["resp-table-body"]}>
            {tableData.map((row) => (
              <TableRow row={row} onSelect={props.onRowSelect} />
            ))}
          </div>
        </div>
      </Panel>
    </div>
  );
};

export default Table;
