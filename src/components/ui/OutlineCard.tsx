import React from 'react';

interface Props {
  className?: string;
  topElement?: React.ReactNode;
  middleElement?: React.ReactNode;
  bottomElement?: React.ReactNode;
}

const OutlineCard = ({
  className,
  topElement,
  middleElement,
  bottomElement,
}: Props) => {
  return (
    <div
      className={`flex flex-col border border-gray-300 bg-white p-4 ${className}`}
    >
      <div>{topElement}</div>
      <div>{middleElement}</div>
      <div>{bottomElement}</div>
    </div>
  );
};

export default OutlineCard;
