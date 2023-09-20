import React from "react";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import InventoryItemView from "./InventoryItemView";

import classes from "./InventoryPreview.module.css";

const InventoryPreview = (props) => {
  const closeHandler = () => {
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <InventoryItemView item={props.item} />
      <div className={classes.preview}>
        <Button onClick={closeHandler}>Close</Button>
      </div>
    </Modal>
  );
};

export default InventoryPreview;
