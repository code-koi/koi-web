import React from 'react';

interface Props {
  rank: 1 | 2 | 3;
  children: React.ReactNode;
  margin?: string;
}

const RANK_COLOR = {
  1: 'bg-blue-800',
  2: 'bg-blue-500',
  3: 'bg-blue-300',
};

const RankItem = (props: Props) => {
  return (
    <div className="flex h-11">
      <div
        className={`${
          RANK_COLOR[props.rank]
        } flex w-11 items-center justify-center rounded-l-lg p-4 ${
          props.margin || ''
        }`}
      >
        {props.rank}
      </div>
      <div className="flex items-center justify-center rounded-r-lg border-e px-4">
        {props.children}
      </div>
    </div>
  );
};

export default RankItem;
