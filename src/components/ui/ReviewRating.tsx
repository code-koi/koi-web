import React from 'react';

interface Props {
  score: string;
  count: string;
}

const ReviewRating = (props: Props) => {
  return (
    <div>
      <span>{props.score}</span>
      <span className="mx-1">/</span>
      <span>{props.count}</span>
    </div>
  );
};

export default ReviewRating;
