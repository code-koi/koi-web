import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  link: string;
}

const FloatingWriteButton = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed bottom-8 right-8 flex h-11"
      onClick={() => {
        navigate(props.link);
      }}
    >
      <div className="flex h-11 w-max items-center rounded-full bg-white pr-4 shadow-xl">
        <div className="flex h-11 w-11 items-center rounded-full bg-blue-500"></div>
        <div className="px-3">글 쓰기</div>
      </div>
    </div>
  );
};

export default FloatingWriteButton;
