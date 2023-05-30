import React from 'react';

interface TabProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isSelected, onClick }) => {
  return (
    <div
      className={`flex items-center justify-center border-b-2 bg-gray-50 px-4 py-2 transition-colors ${
        isSelected ? 'border-blue-500' : ''
      }`}
      onClick={onClick}
    >
      <span className={`${isSelected ? 'text-blue-500' : 'text-black'}`}>
        {label}
      </span>
    </div>
  );
};

export default Tab;
