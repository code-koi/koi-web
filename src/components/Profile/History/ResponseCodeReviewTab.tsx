import React from 'react';
import ResponseCodeReviewCard from '../../ui/cards/ResponseCodeReviewCard';

const dummyData = [
  {
    id: 'yuntaengtaeng',
    link: '/test',
    uid: 'testId1',
    comment: '글',
  },
  {
    id: 'yuntaengtaeng',
    link: '/test',
    uid: 'testId2',
    comment: '글',
  },
  {
    id: 'yuntaengtaeng',
    link: '/test',
    uid: 'testId3',
    comment: '글',
  },
];

const ResponseCodeReviewTab = () => {
  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {dummyData.map((data) => (
        <ResponseCodeReviewCard isKoiGuideVisible={false} {...data} />
      ))}
    </div>
  );
};

export default ResponseCodeReviewTab;
