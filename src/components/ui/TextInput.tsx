import React, { forwardRef, InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChangeHandler?: (value: string) => void;
  width?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ onChangeHandler, width, ...rest }, ref) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChangeHandler) {
        onChangeHandler(event.target.value);
      }
    };

    const inputClasses = `border-b px-2 py-1 outline-0 focus:border-blue-500 ${width}`;

    return (
      <input
        ref={ref}
        type="text"
        className={inputClasses}
        onChange={handleInputChange}
        {...rest}
      />
    );
  }
);

export default TextInput;
