import React from 'react';
import Profile, { Props as ProfileProps } from '../Profile';
import { useNavigate } from 'react-router-dom';
import Tag from '../Tag';

/*
    TODO : 하트 클릭 시 좋아요 API 연결
*/

interface Props extends ProfileProps {
  reviewId: number;
  timestamp: string;
  title: string;
  status: 'PENDING' | 'RESOLVED';
  isFavorite: boolean;
  hashTag?: string[];
  containerClassName?: string;
}

const RequestCodeReviewCard = ({
  reviewId,
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
  const navigate = useNavigate();
  return (
    <div className={containerClassName}>
      <div className="mb-5">
        <Profile
          id={id}
          profileImageUrl={profileImageUrl}
          nickname={nickname}
        />
      </div>
      <div
        className="rounded-3xl bg-B50 px-5 py-4"
        onClick={() => {
          navigate(`/code-review/${reviewId}`);
        }}
      >
        <div className="flex border-b border-purple-300 pb-3">
          <p className="line-clamp-1 flex-1 text-ellipsis text-base font-bold">
            {title}
          </p>
          <span className="min-w-[70px] text-right">
            <Tag
              theme={status === 'RESOLVED' ? 'GREEN' : 'PINK'}
              label={`${status === 'RESOLVED' ? '해결' : '미해결'}`}
            />
          </span>
        </div>
        <p className="mt-6 line-clamp-1 flex-1 text-ellipsis text-base text-B700">
          {hashTag.map((v) => `#${v}`).join(' ')}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm text-B400">{timestamp}</p>
          <Tag label="즐겨찾기" theme={isFavorite ? 'ORANGE' : 'GRAY'} />
        </div>
      </div>
    </div>
  );
};

export default RequestCodeReviewCard;
