import React, { useState } from 'react';
import Chip from '../components/ui/Chip';
import RequestCodeReviewCard from '../components/ui/cards/RequestCodeReviewCard';
import { Review } from '../types/review';
import RankItem from '../components/ui/RankItem';
import Profile from '../components/ui/Profile';
import FloatingWriteButton from '../components/ui/FloatingWriteButton';

const dummy_data: Review[] = [
  {
    id: 1,
    title: '반갑습니다. 코드리뷰 남깁니다.',
    status: 'PENDING',
    createdAt: '2023-06-17T02:26:23',
    user: {
      profileImageUrl:
        'https://code-koi.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-06-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.31.35.png',
      nickname: '김선도1',
      id: 2,
    },
    skills: ['Java', 'React'],
  },
  {
    id: 2,
    title: '이 코드 뭔가 이상한거같은데..?\n',
    status: 'RESOLVED',
    createdAt: '2023-06-17T02:28:41',
    user: {
      profileImageUrl:
        'https://code-koi.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-06-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.31.35.png',
      nickname: '김선도1',
      id: 2,
    },
    skills: ['Java', 'React'],
  },
  {
    id: 3,
    title: 'ㄹ만이러미ㅏ;ㄴㅇ러ㅏㅣ;ㅁㄴㅇ',
    status: 'RESOLVED',
    createdAt: '2023-06-18T18:02:48',
    user: {
      profileImageUrl:
        'https://code-koi.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-06-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.31.35.png',
      nickname: '아저씨\n',
      id: 3,
    },
    skills: ['Java', 'React'],
  },
  {
    id: 4,
    title: 'ㄹ만이러미ㅏ;ㄴㅇ러ㅏㅣ;ㅁㄴㅇ',
    status: 'RESOLVED',
    createdAt: '2023-06-18T18:02:48',
    user: {
      profileImageUrl:
        'https://code-koi.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-06-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.31.35.png',
      nickname: '아저씨\n',
      id: 3,
    },
    skills: ['Java', 'React'],
  },
];

const rank_dummy = [
  {
    profileImageUrl:
      'https://code-koi.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-06-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.31.35.png',
    nickname: '아저씨',
    id: 3,
  },
  {
    profileImageUrl:
      'https://code-koi.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-06-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.31.35.png',
    nickname: '김선도',
    id: 2,
  },
  {
    profileImageUrl:
      'https://code-koi.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-06-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.31.35.png',
    nickname: '고윤태',
    id: 1,
  },
];

const CodeReview = () => {
  const [status, setStatus] = useState<'해결' | '미해결'>('해결');

  return (
    <div className="mx-16">
      <div className="mt-8 flex rounded-3xl bg-white p-7 shadow-lg">
        <div className="flex flex-auto flex-col items-center">
          <h3 className="mb-4 text-2xl font-bold">이 달의 낚시왕</h3>
          {rank_dummy.map((data, index) => (
            <RankItem rank={index + 1} class="mb-4 w-1/2">
              <Profile {...data} />
            </RankItem>
          ))}
        </div>
        <div className="flex-auto"></div>
      </div>
      <div className="my-8">
        <Chip
          label={'해결'}
          id={'해결'}
          isActive={status === '해결'}
          margin="mr-2"
          onClickHandler={() => {
            setStatus('해결');
          }}
        />
        <Chip
          label={'미해결'}
          id={'미해결'}
          isActive={status === '미해결'}
          onClickHandler={() => {
            setStatus('미해결');
          }}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-6">
        {dummy_data.map((data) => (
          <RequestCodeReviewCard
            key={data.id + data.title}
            reviewId={data.id}
            {...data.user}
            timestamp={data.createdAt}
            title={data.title}
            isFavorite={true}
            status={data.status}
            hashTag={data.skills}
          />
        ))}
      </div>
      <FloatingWriteButton link="" />
    </div>
  );
};

export default CodeReview;
