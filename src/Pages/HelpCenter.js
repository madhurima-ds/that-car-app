import React from "react";

import HelpFAQ from "../components/HelpFAQ/HelpFAQ";
// import Card from "../components/Card";

const HelpCenter = (props) => {
    return(        
        // <Card className='card-flat'>
            <HelpFAQ faqList={props.faqList} />
        // </Card>
    )
};

export default HelpCenter;