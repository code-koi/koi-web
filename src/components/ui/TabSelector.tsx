import React, { useState } from 'react';
import Tab from './Tab';

interface TabSelectorProps {
  labels: string[];
  selectedLabel: string;
  onChangeHandler: (label: string) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({
  labels,
  selectedLabel,
  onChangeHandler,
}) => {
  const handleTabClick = (label: string) => {
    onChangeHandler(label);
  };

  return (
    <div className="flex">
      {labels.map((label) => (
        <Tab
          key={label}
          label={label}
          isSelected={selectedLabel === label}
          onClick={() => handleTabClick(label)}
        />
      ))}
    </div>
  );
};

export default TabSelector;
