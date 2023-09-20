import React from "react";

import classes from "./InventoryList.module.css";

import InventoryItem from "./InventoryItem";
import Panel from "../UI/Panel";

const InventoryList = (props) => {
    const inventoryList = props.InventoryList

  return ( 
    <div className={classes["inventory-list"]}>
    <Panel>
    <div id={classes["resp-table"]}>
      {/* <div id={classes["resp-table-caption"]}>Inventory</div> */}
      <div id={classes["resp-table-header"]}>
        <div className={classes["table-header-cell"]}>Image</div>
        <div className={classes["table-header-cell"]}>VIN</div>
        <div className={classes["table-header-cell"]}>Make</div>
        <div className={classes["table-header-cell"]}>Model</div>
        <div className={classes["table-header-cell"]}>Year</div>
        <div className={classes["table-header-cell"]}>Type</div>
        <div className={classes["table-header-cell"]}>Mileage</div>
        <div className={classes["table-header-cell"]}>Color</div>
        <div className={classes["table-header-cell"]}>Price</div>
      </div>
      <div id={classes["resp-table-body"]}>       
      {
        inventoryList.map(item =>
            <InventoryItem item={item} />        
        )
      }             
      </div>
    </div>
    </Panel>
    </div>   
  );
};

export default InventoryList;
