import React, { useState } from "react";

interface Tabs {
  text: string;
  children: React.ReactNode;
}

interface Props {
  tabs: Array<Tabs>;
}

const Tab = ({ tabs }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index: number) => setActiveIndex(index);
  const checkActive = (index: number, className: string) =>
    activeIndex === index ? className : "";
  return (
    <div className="">
      <div className="tabs">
        {tabs.map((item, index) => (
          <button
            className={`tab tab-lifted ${checkActive(index, "tab-active")}`}
            onClick={() => handleClick(index)}
            key={item.text}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div>{tabs[activeIndex]?.children}</div>
    </div>
  );
};

export default Tab;
