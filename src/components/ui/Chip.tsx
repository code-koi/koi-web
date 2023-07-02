import React from 'react';

type ChipId = string | number;

interface Props {
  label: string;
  id: ChipId;
  onClickHandler?: (id: ChipId) => void;
  isActive?: boolean;
  margin?: string;
}

const Chip = ({
  label,
  id,
  onClickHandler,
  isActive = false,
  margin = '',
}: Props) => {
  const handleClick = () => {
    if (onClickHandler) {
      onClickHandler(id);
    }
  };

  return (
    <div
      className={`inline-flex cursor-pointer items-center rounded-3xl px-4 py-2 text-base font-medium ${margin} ${
        isActive ? 'bg-PURPLE text-white' : 'bg-B50 text-B500'
      }`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default Chip;
