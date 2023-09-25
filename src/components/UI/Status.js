import React from "react";
import { useSelector } from "react-redux";

import Modal from "./Modal";

import classes from "./Status.module.css";

const Status = () => {
  const message = useSelector(state => state.status.message);
  
  return (
    <Modal>
      <div className={classes.view}>
        <div>{message}</div>        
      </div>
    </Modal>
  );
};

export default Status;
