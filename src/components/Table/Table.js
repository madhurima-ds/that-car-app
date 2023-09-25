import React from "react";

import styled from "styled-components";
import classes from "./Table.module.css";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const TableView = styled.div`
  margin-left: 0.5em;
  margin-right: 0.5em;  
  max-height: ${props => props.tableheight};
  overflow: auto;
  border-style: solid;
  border-color: midnightblue;
  width: ${props => props.tablewidth};
`;

const Table = (props) => {
  return (
    
    <TableView tablewidth={props.tablewidth} tableheight={props.tableheight}>
      <div id={classes["resp-table"]}>
        <TableHeader columnHeaders={props.columnHeaders} />
        <TableBody
          tableData={props.tableData}
          onRowSelect={props.onRowSelect}
        />
        <TableFooter columnHeaders={props.columnHeaders} />
      </div>
    </TableView>
  );
};

export default Table;
