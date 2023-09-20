import React from "react";

import classes from "./Panel.module.css";

const Panel = (props) => {
  return (
    <div className={`${classes.panel} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Panel;
