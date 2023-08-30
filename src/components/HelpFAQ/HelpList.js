import React from "react";

import HelpItem from "./HelpItem";
import classes from "./HelpList.module.css";

const HelpList = (props) => {
  const faqs = props.faqList;

  return (
    <ul className={classes.list}>
      {faqs.map((faq) => {
        return (
          <li key={faq.id}>
            <HelpItem item={faq} />
          </li>
        );
      })}
    </ul>
  );
};

export default HelpList;
