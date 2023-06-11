import { ChangeEventHandler, useCallback, useState } from 'react';

const echo = (v: string) => v;

const useInputState = (
  initialValue = '',
  transformValue: (value: string) => string = echo
) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange: ChangeEventHandler<HTMLElement & { value: string }> =
    useCallback(
      ({ target: { value } }) => {
        setValue(transformValue(value));
      },
      [transformValue]
    );

  return [value, handleValueChange] as const;
};

export default useInputState;
