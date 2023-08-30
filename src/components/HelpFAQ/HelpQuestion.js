import React from "react";

import classes from './HelpQuestion.module.css';

const HelpQuestion = (props) => {
  return (
    <div className={classes.question} onClick={props.onClick}>
      <span>{props.question}</span>
    </div>
  );
};

export default HelpQuestion;
