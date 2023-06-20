import React from 'react';

type ChipId = string | number;

interface Props {
  label: string;
  id: ChipId;
  onClickHandler?: (id: ChipId) => void;
  isActive?: boolean;
  onDeleteHandler?: (id: ChipId) => void;
  padding?: string;
  margin?: string;
}

const Chip = ({
  label,
  id,
  onClickHandler,
  isActive = false,
  onDeleteHandler,
  padding = 'px-3 py-1.5',
  margin = '',
}: Props) => {
  const handleClick = () => {
    if (onClickHandler) {
      onClickHandler(id);
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDeleteHandler) {
      onDeleteHandler(id);
    }
  };

  return (
    <div
      className={`inline-flex cursor-pointer select-none items-center rounded-2xl text-sm ${
        isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
      } ${padding} ${margin}`}
      onClick={handleClick}
    >
      <span className="mr-1">{label}</span>
      {isActive && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={handleDelete}
        >
          <path
            fillRule="evenodd"
            d="M12.707 7.293a1 1 0 00-1.414 1.414L13.586 11l-2.293 2.293a1 1 0 101.414 1.414L15 12.414l2.293 2.293a1 1 0 001.414-1.414L16.414 11l2.293-2.293a1 1 0 10-1.414-1.414L15 9.586 12.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

export default Chip;
