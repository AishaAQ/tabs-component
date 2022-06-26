import React from "react";
import './TabContent.css';

//To return the content of the selected active tab
const TabContent = ({id, activeTab, children}) => {

    return(
        activeTab === id ? <div className="TabContent">
            {children}
        </div>
        : null
    );
};

export default TabContent;