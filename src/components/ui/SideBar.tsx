import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <nav className="h-screen border-r">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex h-11 w-56 items-center border-l-2 py-1.5 pl-8 ${
                isActive ? 'border-blue-500 bg-gray-200' : ''
              }`
            }
          >
            홈
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mentoring"
            className={({ isActive }) =>
              `flex h-11 w-56 items-center border-l-2 py-1.5 pl-8 ${
                isActive ? 'border-blue-500 bg-gray-200' : ''
              }`
            }
          >
            멘토링
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/code-review"
            className={({ isActive }) =>
              `flex h-11 w-56 items-center border-l-2 py-1.5 pl-8 ${
                isActive ? 'border-blue-500 bg-gray-200' : ''
              }`
            }
          >
            코드리뷰
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
