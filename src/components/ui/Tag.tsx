import React from 'react';

type Theme = 'GREEN' | 'ORANGE' | 'PINK' | 'PURPLE' | 'GRAY';

interface Props {
  label: string;
  theme: Theme;
  onClickHandler?: () => void;
}

const Tag = ({ label, theme, onClickHandler }: Props) => {
  const [textColor, backgroundColor] = (() => {
    switch (theme) {
      case 'GREEN':
        return ['text-GREEN', 'bg-LIGHT_GREEN'];
      case 'ORANGE':
        return ['text-ORANGE', 'bg-LIGHT_ORANGE'];
      case 'PINK':
        return ['text-PINK', 'bg-LIGHT_PINK'];
      case 'PURPLE':
        return ['text-PURPLE', 'bg-B300'];
      case 'GRAY':
        return ['text-B900', 'bg-GRAY'];
    }
  })();

  return (
    <span
      onClick={onClickHandler}
      className={`rounded px-3 py-1 text-sm ${textColor} ${backgroundColor}`}
    >
      {label}
    </span>
  );
};

export default Tag;
