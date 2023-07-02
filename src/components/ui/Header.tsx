import React from 'react';
import Logo from './icon/Logo';
import { NAV_ITEMS } from '../../constants/nav';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-14 min-h-[3.5rem] justify-around bg-B900 px-4">
      <div className="flex items-center text-white">
        <Logo />
        <span className="ml-4">CODEKOI</span>
      </div>
      <ul className="flex items-center">
        {NAV_ITEMS.map(({ to, label, Icon }, index) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center rounded px-1.5 ${
                  isActive ? 'bg-B700 text-white' : 'text-B700'
                }
                ${index + 1 !== NAV_ITEMS.length ? 'mr-4' : ''}
                `
              }
            >
              <Icon size={36} />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <img
          className="h-8 w-8 rounded-full"
          src="/images/profile_placeholder.png"
          alt="profileIMG"
        />
      </div>
    </header>
  );
};

export default Header;
