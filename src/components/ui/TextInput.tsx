import React, { forwardRef, InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ width, ...rest }, ref) => {
    const inputClasses = `border-b px-2 py-1 outline-0 focus:border-blue-500 ${width}`;

    return <input ref={ref} type="text" className={inputClasses} {...rest} />;
  }
);

export default TextInput;
