import React, {useState} from 'react';

const Tabs = ({arr}) => {
    const [selectedTab, setSelectedTab] = useState(arr[0])
    
    const onCLickTab = (index) => {
        setSelectedTab(arr[index])
    }
    return (
        <div>
        <div style={{display: "flex"}}>
            {arr.map((item, i) => {
                let selectedClass = ""
                if( item === selectedTab){
                    selectedClass += "selectedClass"
                }
              return (
                <h1 
                key={i} className={`tab ${selectedClass}`}
                onClick={() => onCLickTab(i)}
                >{item.label}</h1>
              );
            })}
        </div>
        <div className="content-container">
          <h2>{selectedTab.content}</h2>
        </div>
      </div>
    );
};

export default Tabs;