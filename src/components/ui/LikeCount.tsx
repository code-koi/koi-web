import React from 'react';

interface Props {
  count: number;
  isLiked?: boolean;
}

const LikeCount = ({ count, isLiked }: Props) => {
  const [textColor, backgroundColor] = (() => {
    return isLiked
      ? ['text-ORANGE', 'bg-LIGHT_ORANGE']
      : ['text-B900', 'bg-GRAY'];
  })();

  return (
    <span
      className={`${textColor} ${backgroundColor} inline-flex items-center justify-center rounded-3xl px-4 py-2`}
    >
      <span className="mr-1 text-xl">😊</span>
      {count}
    </span>
  );
};

export default LikeCount;
