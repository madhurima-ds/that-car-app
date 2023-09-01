import React from "react";

import classes from "./InventoryItem.module.css";

const InventoryItem = (props) => {    
  const item = props.item;

    const displayPreviewHandler = () => {
        console.log("CLICKED!!!!")
    }


  return (
    <div className={classes["resp-table-row"]} onClick={displayPreviewHandler}>
      <div className={classes["table-body-cell"]}>{<img src={item.img} alt={item.id}></img>}</div>
      <div className={classes["table-body-cell"]}>{item.id}</div>
      <div className={classes["table-body-cell"]}>{item.make}</div>
      <div className={classes["table-body-cell"]}>{item.model}</div>
      <div className={classes["table-body-cell"]}>{item.year}</div>
      <div className={classes["table-body-cell"]}>{item.type}</div>
      <div className={classes["table-body-cell"]}>{item.mileage}</div>
      <div className={classes["table-body-cell"]}>{item.color}</div>
      <div className={classes["table-body-cell"]}>{item.price}</div>
    </div>
  );
};

export default InventoryItem;
