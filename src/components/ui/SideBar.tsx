import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants/nav';

const SideBar = () => {
  return (
    <nav className="h-auto border-r">
      <ul>
        {NAV_ITEMS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex h-11 w-56 items-center border-l-2 py-1.5 pl-8 ${
                  isActive ? 'border-blue-500 bg-gray-200' : ''
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
