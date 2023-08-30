import React from "react";

import classes from "./HelpAnswer.module.css";

const HelpAnswer = (props) => {
  return (
    <div className={classes.answer}>
      <div>
        <span>{props.answer}</span>
      </div>
    </div>
  );
};

export default HelpAnswer;
