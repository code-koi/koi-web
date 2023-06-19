import React from 'react';
import Profile, { Props as ProfileProps } from '../Profile';
import OutlineCard from '../OutlineCard';
import { VscHeartFilled, VscHeart } from 'react-icons/vsc';

/*
    TODO : uid를 활용하여 onClick 구현 필요
    - 하트 클릭 시 좋아요 API 연결
*/

interface Props extends ProfileProps {
  timestamp: string;
  title: string;
  status: 'PENDING' | 'RESOLVED';
  isFavorite: boolean;
  hashTag?: string[];
  containerClassName?: string;
}

const HEART_COLOR = '#ef4444';

const RequestCodeReviewCard = ({
  id,
  profileImageUrl,
  nickname,
  timestamp,
  title,
  status,
  isFavorite,
  hashTag = [],
  containerClassName,
}: Props) => {
  return (
    <div className={containerClassName}>
      <div className="mb-5 flex items-center justify-between">
        <Profile
          id={id}
          profileImageUrl={profileImageUrl}
          nickname={nickname}
        />
        <span className="text-zinc-400">{timestamp}</span>
      </div>
      <OutlineCard
        topElement={
          <div className="mb-4 flex">
            <p className="line-clamp-1 flex-1 text-ellipsis text-xl">{title}</p>
            <span className="min-w-[100px] text-right">
              {status === 'RESOLVED' ? '✅' : '❌'}
            </span>
          </div>
        }
        bottomElement={
          <div className="flex">
            <p className="line-clamp-1 flex-1 text-ellipsis text-base text-neutral-600">
              {hashTag.map((v) => `#${v}`).join(' ')}
            </p>
            <span className="min-w-[100px]">
              {isFavorite ? (
                <VscHeartFilled
                  style={{ marginLeft: 'auto' }}
                  size={24}
                  color={HEART_COLOR}
                />
              ) : (
                <VscHeart
                  style={{ marginLeft: 'auto' }}
                  size={24}
                  color={HEART_COLOR}
                />
              )}
            </span>
          </div>
        }
      />
    </div>
  );
};

export default RequestCodeReviewCard;
