import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Panel = (props: Props) => {
  return (
    <div className="mx-auto w-[calc(100%-4rem)] bg-white">{props.children}</div>
  );
};

export default Panel;
