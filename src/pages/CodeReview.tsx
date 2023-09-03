import React, { useEffect, useRef, useState } from 'react';
import Chip from '../components/ui/Chip';
import RequestCodeReviewCard from '../components/ui/cards/RequestCodeReviewCard';
import { Review } from '../types/review';
import RankItem from '../components/ui/RankItem';
import Profile from '../components/ui/Profile';
import FloatingWriteButton from '../components/ui/FloatingWriteButton';
import TechSearch from '../components/ui/TechSearch';
import { VscSearch } from 'react-icons/vsc';
import Search from '../components/CodeReview/Search';
import axios from 'axios';
import useTechSearch from '../hooks/useTechSearch';
import useScrollYPosition from '../hooks/useScrollYPosition';
import useDidUpdate from '../hooks/useDidUpdate';

type Filter = 'PENDING' | 'RESOLVED' | 'ALL';

type FilterOption = {
  label: '해결' | '미해결' | '전체';
  id: 'PENDING' | 'RESOLVED' | 'ALL';
};

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
  const [status, setStatus] = useState<Filter>('ALL');
  const filters: FilterOption[] = [
    {
      label: '전체',
      id: 'ALL',
    },
    {
      label: '해결',
      id: 'RESOLVED',
    },
    {
      label: '미해결',
      id: 'PENDING',
    },
  ];
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isRequested, setIsRequested] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const hasNext = useRef(false);
  const lastId = useRef(0);
  const { percentage } = useScrollYPosition();

  const {
    selectedTechs,
    selectedTechIds,
    handler: { onResetHandler, onTechSelect },
  } = useTechSearch();

  const openSearchScreen = () => {
    setIsSearchOpen(true);
  };

  const getCodeReviews = async (shouldResetList: boolean) => {
    if (isRequested) {
      return;
    }

    setIsRequested(true);
    try {
      const query = Object.entries({
        ...(!!searchQuery && {
          title: searchQuery,
        }),
        ...(status !== 'ALL' && {
          status,
        }),
        ...(!!selectedTechIds.length && {
          skillIds: [...selectedTechIds],
        }),
        ...(!!lastId.current && {
          lastId: lastId.current,
        }),
      })
        .map(([k, v]) => {
          switch (k) {
            case 'skillIds':
              return (v as number[])
                .map((skillId) => `skillId=${skillId}`)
                .join('&');
            default:
              return `${k}=${v}`;
          }
        })
        .join('&');

      const { data } = await axios.get<{
        list: Review[];
        hasNext: boolean;
        lastId: number;
      }>(`/api/code-reviews?${query}`);

      console.log(data);

      if (shouldResetList) {
        setReviews(data.list);
      } else {
        setReviews([...reviews, ...data.list]);
      }
      lastId.current = data.lastId;
      hasNext.current = data.hasNext;
    } catch (error) {
    } finally {
      setIsRequested(false);
    }
  };

  const initOptions = () => {
    lastId.current = 0;
    hasNext.current = false;
  };

  useDidUpdate(() => {
    initOptions();
    getCodeReviews(true);
  }, [searchQuery, status, selectedTechs]);

  useEffect(() => {
    if (percentage >= 90 && hasNext.current) {
      getCodeReviews(false);
    }
  }, [percentage]);

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
          <div className="flex flex-wrap gap-4 px-4">
            {selectedTechs.map(({ name, id }) => (
              <Chip key={name + id} id={id} label={name} isActive={true} />
            ))}
          </div>
        </div>
      </div>
      <div className="my-8">
        {filters.map((filter) => (
          <Chip
            label={filter.label}
            id={filter.id}
            isActive={status === filter.id}
            margin="mr-2"
            onClickHandler={() => {
              setStatus(filter.id);
            }}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-6">
        {reviews.map((data) => (
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
