import React from 'react';

interface Props {
  widht?: string;
  topElement?: React.ReactNode;
  middleElement?: React.ReactNode;
  bottomElement?: React.ReactNode;
}

const OutlineCard = ({
  widht,
  topElement,
  middleElement,
  bottomElement,
}: Props) => {
  return (
    <div
      className={`flex flex-col border border-gray-300 bg-white p-4 ${widht}`}
    >
      <div>{topElement}</div>
      <div>{middleElement}</div>
      <div>{bottomElement}</div>
    </div>
  );
};

export default OutlineCard;
