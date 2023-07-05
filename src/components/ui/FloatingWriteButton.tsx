import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

interface Props {
  link: string;
}

const FloatingWriteButton = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-B900"
      onClick={() => {
        navigate(props.link);
      }}
    >
      <MdAdd size={32} className="fill-B50" />
    </div>
  );
};

export default FloatingWriteButton;
