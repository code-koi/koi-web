import React from 'react';
import RequestCodeReviewCard from '../../ui/cards/RequestCodeReviewCard';

const reviews = [
  {
    user: {
      profileImageUrl: 'test.com/sundo.png',
      nickname: '김선도',
      id: 1,
    },
    createdAt: '방금 전',
    title: '자바 스프링 관련 코드 질문합니다.',
    skills: ['JPA', 'JAVA'],
    status: 'PENDING' as 'PENDING' | 'RESOLVED',
    reviewId: 1,
    isFavorite: false,
  },
  {
    user: {
      profileImageUrl: 'test.com/sundo.png',
      nickname: '김선도',
      id: 2,
    },
    createdAt: '방금 전',
    title: '리액트 컴포넌트 설계 도와주세요',
    skills: ['React', 'TypeScript'],
    status: 'RESOLVED' as 'PENDING' | 'RESOLVED',
    reviewId: 2,
    isFavorite: true,
  },
  {
    user: {
      profileImageUrl: 'test.com/sundo.png',
      nickname: '김선도',
      id: 2,
    },
    createdAt: '방금 전',
    title: '리액트 Custom hook 패턴 도와주세요',
    skills: ['React', 'TypeScript'],
    status: 'RESOLVED' as 'PENDING' | 'RESOLVED',
    reviewId: 3,
    isFavorite: false,
  },
  {
    user: {
      profileImageUrl: 'test.com/sundo.png',
      nickname: '김선도',
      id: 2,
    },
    createdAt: '방금 전',
    title: '리액트 Custom hook 패턴 도와주세요',
    skills: ['React', 'TypeScript'],
    status: 'RESOLVED' as 'PENDING' | 'RESOLVED',
    reviewId: 4,
    isFavorite: false,
  },
];

const Request = () => {
  return (
    <div>
      <p className="mb-6 text-2xl font-semibold text-B900">인기있는 코드리뷰</p>
      <div className="grid grid-cols-4 gap-x-6">
        {reviews.map((data) => (
          <RequestCodeReviewCard
            key={data.reviewId}
            reviewId={data.reviewId}
            {...data.user}
            timestamp={data.createdAt}
            title={data.title}
            isFavorite={data.isFavorite}
            status={data.status}
            hashTag={data.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Request;
