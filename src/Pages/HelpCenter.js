import React from "react";

import HelpFAQ from "../components/HelpFAQ/HelpFAQ";

const HelpCenter = (props) => {
    return(        
            <HelpFAQ faqList={props.faqList} />
    )
};

export default HelpCenter;