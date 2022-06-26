import React, {useState} from "react";
import TabNavItem from "../TabComponent/TabNavItem";
import TabContent from "../TabComponent/TabContent";
import './Tabs.css';
import '../TabComponent/TabContent.css';

const Tabs = () => {

    //To set the default tab to be selected
    const [activeTab, setActiveTab] = useState(1);

    return(
        
        <div className="Tabs">

            {/*To display the buttons of each tab heading*/}
            <ul className="nav">
                <TabNavItem title="Tab 1" id={1} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Tab 2" id={2} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Tab 3" id={3} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Tab 4" id={4} activeTab={activeTab} setActiveTab={setActiveTab}/>
            </ul>

            {/*To display the contents of each tab*/}
            <div className="outlet">
              <TabContent id={1} activeTab={activeTab}>
                <p>This is the first tab :)</p>
              </TabContent>
              <TabContent id={2} activeTab={activeTab}>
                <p>This is the second tab ^^</p>
              </TabContent>
              <TabContent id={3} activeTab={activeTab}>
                <p>This is the third tab ^_^</p>
              </TabContent>
              <TabContent id={4} activeTab={activeTab}>
                <p>This is the fourth tab !</p>
              </TabContent>
            </div>
        </div>
    );
};

export default Tabs;