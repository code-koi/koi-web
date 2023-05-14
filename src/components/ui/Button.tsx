import React from 'react';

type Props = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

const Button: React.VFC<Props> = ({
  onClick,
  className = '',
  children,
  size = 'medium',
}) => {
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  const classNames = `bg-blue-500 hover:bg-blue-700 active:bg-blue-700 active:opacity-50 text-white font-bold rounded ${sizeClasses[size]} ${className}`;

  return (
    <button className={classNames.trim()} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
