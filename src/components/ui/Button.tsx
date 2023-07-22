import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
  isRounded?: boolean;
}

const Button = ({
  onClick,
  className = '',
  children,
  size = 'medium',
  isRounded,
  ...props
}: Props) => {
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  const classNames = `bg-PURPLE active:opacity-50 disabled:bg-B50 disabled:text-B900 text-white font-bold rounded ${
    sizeClasses[size]
  } ${className} ${isRounded ? 'rounded-2xl' : ''}`;

  return (
    <button className={classNames.trim()} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
