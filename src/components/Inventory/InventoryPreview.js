import React from "react";

import Button from "../Button";
import ModalDialog from "../ModalDialog";
import InventoryItemView from "./InventoryItemView";

import classes from "./InventoryPreview.module.css";

const InventoryPreview = (props) => {
  const closeHandler = () => {
    props.onClose();
  };

  return (
    <ModalDialog onClose={props.onClose}>
      <InventoryItemView item={props.item} />
      <div className={classes.preview}>
        <Button onClick={closeHandler}>Close</Button>
      </div>
    </ModalDialog>
  );
};

export default InventoryPreview;
