import React, { useState } from 'react';
import Tab from './Tab';

interface TabSelectorProps {
  labels: string[];
  selectedLabel: string;
  onChangeHandler: (label: string) => void;
  containerClassName?: string;
  chipClassName?: string;
}

const TabSelector: React.FC<TabSelectorProps> = ({
  labels,
  selectedLabel,
  onChangeHandler,
  containerClassName = '',
  chipClassName = '',
}) => {
  const handleTabClick = (label: string) => {
    onChangeHandler(label);
  };

  return (
    <div className={`flex ${containerClassName}`}>
      {labels.map((label) => (
        <Tab
          className={chipClassName}
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
