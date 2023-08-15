import React from 'react';

interface Props {
  rank: number;
  children: React.ReactNode;
  class?: string;
}

const RankItem = (props: Props) => {
  return (
    <div className={`flex ${props.class}`}>
      <div className="flex w-11 items-center justify-center rounded-l-lg bg-PURPLE p-4 text-white">
        {props.rank}
      </div>
      <div className="flex flex-auto items-center justify-start rounded-r-lg border-e px-4">
        {props.children}
      </div>
    </div>
  );
};

export default RankItem;
