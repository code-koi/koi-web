import React from 'react';
import { NAV_ITEMS } from '../../constants/nav';
import { NavLink } from 'react-router-dom';

const MobileFooter = () => {
  return (
    <footer className="flex h-14 min-h-[3.5rem] bg-blue-500">
      {NAV_ITEMS.map(({ to, label, Icon }) => (
        <div className="flex flex-auto flex-col items-center justify-center">
          <NavLink
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center  ${
                isActive ? 'text-white' : 'text-gray-400'
              }`
            }
          >
            <Icon size={24} />
            <p>{label}</p>
          </NavLink>
        </div>
      ))}
    </footer>
  );
};

export default MobileFooter;
