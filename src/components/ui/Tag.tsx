import React from 'react';

type Theme = 'GREEN' | 'ORANGE' | 'PINK';

interface Props {
  label: string;
  theme: Theme;
}

const Tag = ({ label, theme }: Props) => {
  const [textColor, backgroundColor] = (() => {
    switch (theme) {
      case 'GREEN':
        return ['text-GREEN', 'bg-LIGHT_GREEN'];
      case 'ORANGE':
        return ['text-ORANGE', 'bg-LIGHT_ORANGE'];
      case 'PINK':
        return ['text-PINK', 'bg-LIGHT_PINK'];
    }
  })();

  return (
    <span
      className={`rounded px-3 py-1 text-sm ${textColor} ${backgroundColor}`}
    >
      {label}
    </span>
  );
};

export default Tag;
