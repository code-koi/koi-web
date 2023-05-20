import React from 'react';

const FixedButton = () => {
  return (
    <div className="fixed bottom-8 right-8 flex h-11">
      <div className="flex h-11 w-max items-center rounded-full bg-white pr-4 shadow-xl">
        <div className="h-11 w-11 rounded-full bg-blue-500"></div>
        <div className="px-3">글 쓰기</div>
      </div>
    </div>
  );
};

export default FixedButton;
