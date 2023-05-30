import React, { ChangeEventHandler } from 'react';

interface CheckboxProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  isChecked: boolean;
  label: string;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  onChangeHandler,
  isChecked,
  label,
  disabled,
  ...rest
}) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="form-checkbox text-blue-500"
        checked={isChecked}
        disabled={disabled}
        onChange={onChangeHandler}
        {...rest}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
