import React from 'react';
import { NavLink } from 'react-router-dom';

const ITMES = [
  {
    to: '/',
    label: '홈',
  },
  {
    to: '/mentoring',
    label: '멘토링',
  },
  {
    to: '/code-review',
    label: '코드리뷰',
  },
];

const SideBar = () => {
  return (
    <nav className="h-screen border-r">
      <ul>
        {ITMES.map(({ to, label }) => (
          <li>
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
