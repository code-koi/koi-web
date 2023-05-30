import React, { forwardRef, InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChangeHandler?: (value: string) => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ onChangeHandler, ...rest }, ref) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChangeHandler) {
        onChangeHandler(event.target.value);
      }
    };

    return (
      <input
        ref={ref}
        type="text"
        className="border-b border-none focus:border-blue-500"
        onChange={handleInputChange}
        {...rest}
      />
    );
  }
);

export default TextInput;
