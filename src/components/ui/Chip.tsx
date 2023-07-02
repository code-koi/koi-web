import React from 'react';

type ChipId = string | number;

interface Props<T extends ChipId> {
  label: string;
  id: T;
  onClickHandler?: (id: T) => void;
  isActive?: boolean;
  margin?: string;
}

const Chip = <T extends ChipId>({
  label,
  id,
  onClickHandler,
  isActive = false,
  margin = '',
}: Props<T>) => {
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
