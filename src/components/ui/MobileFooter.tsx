import React from 'react';
import { VscHome, VscPreview } from 'react-icons/vsc';
import { useLocation, useNavigate } from 'react-router-dom';

const MobileFooter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isCodeReview = location.pathname.includes('code-review');

  const navigateToPage = (url: string) => {
    navigate(url);
  };

  return (
    <footer className="flex h-14 min-h-[3.5rem] bg-blue-500">
      <div
        onClick={() => {
          navigateToPage('/');
        }}
        className={`flex flex-auto flex-col items-center justify-center ${
          isHome ? 'text-white' : 'text-gray-400'
        }`}
      >
        <VscHome size={24} />
        <p>홈</p>
      </div>
      <div
        onClick={() => {
          navigateToPage('/code-review');
        }}
        className={`flex flex-auto flex-col items-center justify-center ${
          isCodeReview ? 'text-white' : 'text-gray-400'
        }`}
      >
        <VscPreview size={24} />
        <p>코드 리뷰</p>
      </div>
    </footer>
  );
};

export default MobileFooter;
