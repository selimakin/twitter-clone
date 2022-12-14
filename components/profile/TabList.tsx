import React from "react";

interface Tab {
  name: string;
  span: number;
}

interface Props {
  tabs: Tab[];
  activeTab: number;
  onClick: (i: number) => void;
}

const TabList = ({ tabs, activeTab, onClick }: Props) => {
  return (
    <div className="grid grid-cols-5 mt-5 justify-items-stretch">
      {tabs.map((tab, i) => (
        <div
          onClick={() => onClick(i)}
          key={i}
          className={`col-span-${tab.span} pt-3 hover:bg-gray-300 hover:cursor-pointer flex justify-center`}
        >
          <span
            className={`pb-4 text-center border-b-4 border-transparent ${
              i === activeTab ? "border-blue-400" : ""
            }`}
          >
            {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TabList;
