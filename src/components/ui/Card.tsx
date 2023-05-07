import React from 'react';

interface Props {
  title: string;
  sub: string;
  img?: string;
  nickname: string;
}

const Card = (props: Props) => {
  return (
    <div className="min-w-[300px] p-4 shadow-2xl">
      <p className="mb-2 font-semibold">{props.title}</p>
      <p className="mb-2">{props.sub}</p>
      <div>
        이미지
        <span className="ml-4">{props.nickname}</span>
      </div>
    </div>
  );
};

export default Card;
