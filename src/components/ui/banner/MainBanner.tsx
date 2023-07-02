import React from 'react';

const MainBanner = () => {
  return (
    <div className="flex h-80 w-full items-center justify-center bg-B50">
      <p className="mr-12 text-3xl font-bold text-B900">
        혼자서 고민하지 마세요
        <br />
        사람들에게 조언을 구해보세요
      </p>
      <img src={`/images/banner/banner1.png`} alt="banner" className="w-72" />
    </div>
  );
};

export default MainBanner;
