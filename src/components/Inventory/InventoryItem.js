import React, { Fragment, useState } from "react";

import classes from "./InventoryItem.module.css";

import InventoryPreview from "./InventoryPreview";

const InventoryItem = (props) => {
  const item = props.item;
  const [previewIsVisible, setPreviewIsVisible] = useState(false);

  const displayPreviewHandler = () => {
    setPreviewIsVisible(true);
  };

  const hidePreviewHandler = () => {
    setPreviewIsVisible(false);
  };

  return (
    <Fragment>
      <div
        className={classes["resp-table-row"]}
        onClick={displayPreviewHandler}
      >
        <div className={classes["table-body-cell"]}>
          {<img src={item.img} alt={item.id}></img>}
        </div>
        <div className={classes["table-body-cell"]}>{item.id}</div>
        <div className={classes["table-body-cell"]}>{item.make}</div>
        <div className={classes["table-body-cell"]}>{item.model}</div>
        <div className={classes["table-body-cell"]}>{item.year}</div>
        <div className={classes["table-body-cell"]}>{item.type}</div>
        <div className={classes["table-body-cell"]}>{item.mileage}</div>
        <div className={classes["table-body-cell"]}>{item.color}</div>
        <div className={classes["table-body-cell"]}>{item.price}</div>
      </div>
      {previewIsVisible && <InventoryPreview item={item} onClose={hidePreviewHandler} />}
    </Fragment>
  );
};

export default InventoryItem;
