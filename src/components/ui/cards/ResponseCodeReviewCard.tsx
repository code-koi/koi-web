import React from 'react';
import Profile, { Props as ProfileProps } from '../Profile';
import OutlineCard from '../OutlineCard';
import Tooltip from '../ToolTip';

/*
    TODO : uid를 활용하여 onClick 구현 필요
    - 🐟 클릭 시 Modal open 구현 필요
*/

interface Props extends ProfileProps {
  comment: string;
  isKoiGuideVisible: boolean;
  containerClassName?: string;
}

const ResponseCodeReviewCard = ({
  id,
  profileImageUrl,
  nickname,
  comment,
  isKoiGuideVisible,
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

        {isKoiGuideVisible && (
          <Tooltip
            labelElement={'🐟'}
            tooltipElement={
              <div className="w-max">코이를 지급 할 수 있어요</div>
            }
          />
        )}
      </div>
      <OutlineCard
        topElement={
          <div className="mb-4 flex">
            <p className="text-l whitespace-pre-line">{comment}</p>
          </div>
        }
      />
    </div>
  );
};

export default ResponseCodeReviewCard;
