import React, { useState } from "react";

import HelpQuestion from "./HelpQuestion";
import HelpAnswer from "./HelpAnswer";

const HelpItem = (props) => {
    const[answerIsVisiable, setAnswerIsVisiable] = useState(false);

    const onClickHandler = () => {
        setAnswerIsVisiable(!answerIsVisiable);
    };

  return (
    <div onClick={onClickHandler}>
      <HelpQuestion question={props.item.question} />
      { answerIsVisiable && <HelpAnswer answer={props.item.answer}/>}
    </div>
  );
};

export default HelpItem;
