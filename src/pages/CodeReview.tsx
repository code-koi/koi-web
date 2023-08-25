import React, { useEffect, useState } from 'react';
import Chip from '../components/ui/Chip';
import RequestCodeReviewCard from '../components/ui/cards/RequestCodeReviewCard';
import { Review } from '../types/review';
import RankItem from '../components/ui/RankItem';
import Profile from '../components/ui/Profile';
import FloatingWriteButton from '../components/ui/FloatingWriteButton';
import TechSearch from '../components/ui/TechSearch';
import { Skill } from '../types/user';
import { VscSearch } from 'react-icons/vsc';
import Search from '../components/CodeReview/Search';
import axios from 'axios';
import useTechSearch from '../hooks/useTechSearch';

type Filter = '해결' | '미해결' | '전체';

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
  const [status, setStatus] = useState<Filter>('전체');
  const filters: Filter[] = ['전체', '해결', '미해결'];
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const {
    selectedTechs,
    selectedTechIds,
    handler: { onResetHandler, onTechSelect },
  } = useTechSearch();

  const openSearchScreen = () => {
    setIsSearchOpen(true);
  };

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
        <div className="flex-auto">
          <div
            className="mx-4 flex h-10 items-center rounded-lg bg-GRAY px-4"
            onClick={openSearchScreen}
          >
            <VscSearch
              size={24}
              color={'#000'}
              style={{ marginRight: '8px' }}
            />
            <span className="text-xl font-semibold">{searchQuery}</span>
          </div>
          <TechSearch
            selectedTechIds={selectedTechIds}
            onTechSelect={onTechSelect}
            onResetHandler={onResetHandler}
          />
          <div className="flex flex-wrap gap-4">
            {selectedTechs.map(({ name, id }) => (
              <Chip key={name + id} id={id} label={name} isActive={true} />
            ))}
          </div>
        </div>
      </div>
      <div className="my-8">
        {filters.map((label) => (
          <Chip
            label={label}
            id={label}
            isActive={status === label}
            margin="mr-2"
            onClickHandler={() => {
              setStatus(label);
            }}
          />
        ))}
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
      {isSearchOpen && (
        <Search
          closeHandler={() => {
            setIsSearchOpen(false);
          }}
          callbackSearch={(search = '') => {
            setSearchQuery(search);
          }}
        />
      )}
    </div>
  );
};

export default CodeReview;
