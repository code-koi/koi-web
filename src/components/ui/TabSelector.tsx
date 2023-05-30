import React, { useState } from 'react';
import Tab from './Tab';

interface TabSelectorProps {
  labels: string[];
  isSelected: string;
  onChangeHandler: (label: string) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({
  labels,
  isSelected,
  onChangeHandler,
}) => {
  const [selectedTab, setSelectedTab] = useState(isSelected);

  const handleTabClick = (label: string) => {
    setSelectedTab(label);
    onChangeHandler(label);
  };

  return (
    <div className="flex">
      {labels.map((label) => (
        <Tab
          key={label}
          label={label}
          isSelected={selectedTab === label}
          onClick={() => handleTabClick(label)}
        />
      ))}
    </div>
  );
};

export default TabSelector;
