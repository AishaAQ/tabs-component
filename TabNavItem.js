import React from "react";

const TabNavItem = ({id,title,activeTab,setActiveTab}) => {
    
    //To activate the tab that is selected
    const handleClick = () => {
        setActiveTab(id);
    };

    //To return the TabNavItem object of a tab
    return (
        <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
            { title }
        </li>
    );
};

export default TabNavItem;