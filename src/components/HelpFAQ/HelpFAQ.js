import React from "react";

import HelpList from "./HelpList";
import Card from "../Card";

import classes from "./HelpFAQ.module.css";

const HelpFAQ = (props) => {
  return (
    <div className={classes.help}>
      <p>Frequently Asked Questions</p>
      <Card className="card-flat">
        <HelpList faqList={props.faqList}></HelpList>
      </Card>
    </div>
  );
};

export default HelpFAQ;
