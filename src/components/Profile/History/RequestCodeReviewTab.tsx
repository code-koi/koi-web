import React from 'react';
import RequestCodeReviewCard from '../../ui/cards/RequestCodeReviewCard';

const dummyData = [
  {
    id: 'yuntaengtaeng',
    link: '/test',
    title: '글 제목',
    timestamp: '2시간 전',
    isResolved: true,
    uid: 'testId1',
    isFavorite: false,
    hashTag: ['JAVA', 'Spring boot'],
    profileImg:
      'https://code-koi.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-06-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.31.35.png',
  },
  {
    id: 'yuntaengtaeng',
    link: '/test',
    title: '글 제목',
    timestamp: '2시간 전',
    isResolved: true,
    uid: 'testId3',
    isFavorite: false,
    hashTag: ['JAVA', 'Spring boot'],
    profileImg:
      'https://code-koi.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-06-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.31.35.png',
  },
  {
    id: 'yuntaengtaeng',
    link: '/test',
    title: '글 제목',
    timestamp: '2시간 전',
    isResolved: true,
    uid: 'testId2',
    isFavorite: false,
    hashTag: ['JAVA', 'Spring boot'],
    profileImg:
      'https://code-koi.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-06-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.31.35.png',
  },
  {
    id: 'yuntaengtaeng',
    link: '/test',
    title: '글 제목',
    timestamp: '2시간 전',
    isResolved: true,
    uid: 'testId4',
    isFavorite: false,
    hashTag: ['JAVA', 'Spring boot'],
    profileImg:
      'https://code-koi.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-06-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.31.35.png',
  },
  {
    id: 'yuntaengtaeng',
    link: '/test',
    title: '글 제목',
    timestamp: '2시간 전',
    isResolved: true,
    uid: 'testId5',
    isFavorite: false,
    hashTag: ['JAVA', 'Spring boot'],
    profileImg:
      'https://code-koi.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-06-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.31.35.png',
  },
];

const RequestCodeReviewTab = () => {
  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {dummyData.map((data) => (
        <RequestCodeReviewCard containerClassName="" {...data} />
      ))}
    </div>
  );
};

export default RequestCodeReviewTab;
