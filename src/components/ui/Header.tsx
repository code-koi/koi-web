import React from 'react';
import Logo from './icon/Logo';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-14 bg-blue-500 px-4">
      <div className="flex items-center text-white">
        <span className="mr-4 ">CODEKOI</span>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
