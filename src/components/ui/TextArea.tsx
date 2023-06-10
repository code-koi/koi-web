import React, { useState } from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const TextArea: React.FC<Props> = ({ value, onChange, className = '' }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  const focusBorderColor = isFocused ? 'focus:border-blue-500' : '';

  return (
    <textarea
      className={`resize-none rounded border p-2 ${focusBorderColor} ${className}`}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

TextArea.defaultProps = {
  className: 'w-96 h-64',
};

export default TextArea;
