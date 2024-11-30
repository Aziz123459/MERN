import React from "react";

const Tabs = ({ select, tabs, Style }) => {
  return (
    <div>
      {tabs.map((tab, index) => (
        <button className={`tab ${Style(index)}`} key={index} onClick={() => select(index)}>
          {tab.tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
