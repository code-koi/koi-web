import React from 'react';
import Profile, { Props as ProfileProps } from '../Profile';
import Tooltip from '../ToolTip';
import LikeCount from '../LikeCount';

/*
    TODO : uid를 활용하여 onClick 구현 필요
    - 🐟 클릭 시 Modal open 구현 필요
*/

interface Props extends ProfileProps {
  reviewId: number;
  comment: string;
  isKoiGuideVisible?: boolean;
  koiGuideContent?: React.ReactNode;
  containerClassName?: string;
  count: number;
  isLiked?: boolean;
  isEllipsis?: boolean;
}

const ResponseCodeReviewCard = ({
  id,
  reviewId,
  profileImageUrl,
  nickname,
  comment,
  isKoiGuideVisible,
  koiGuideContent = '코이를 지급 할 수 있어요',
  containerClassName,
  count,
  isLiked,
  isEllipsis,
}: Props) => {
  return (
    <div className={containerClassName}>
      <div className="flex items-center justify-between bg-PURPLE p-3">
        <Profile
          id={id}
          profileImageUrl={profileImageUrl}
          nickname={nickname}
        />

        {isKoiGuideVisible && (
          <Tooltip
            labelElement={'🐟'}
            tooltipElement={<div className="w-max">{koiGuideContent}</div>}
          />
        )}
      </div>
      <div className="p-3">
        <p
          className={`mb-4 ${
            isEllipsis ? 'line-clamp-1 text-ellipsis' : ''
          } text-base font-medium`}
        >
          {comment}
        </p>
        <LikeCount isLiked={isLiked} count={count} />
      </div>
    </div>
  );
};

export default ResponseCodeReviewCard;
