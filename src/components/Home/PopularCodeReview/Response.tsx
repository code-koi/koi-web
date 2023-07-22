import React from 'react';
import ResponseCodeReviewCard from '../../ui/cards/ResponseCodeReviewCard';

const comments = [
  {
    user: {
      profileImageUrl: 'test.com/sundo.png',
      nickname: '김선도',
      id: 2,
    },
    reviewId: 1,
    createdAt: '방금 전',
    content: '이 코드에서 생성자가 조금 이상합니다. 다시 확인해주세요.',
    koiType: 'FISHBOWL',
    likeCount: 2,
    isLiked: true,
  },
  {
    user: {
      profileImageUrl: 'test.com/sundo.png',
      nickname: '김선도',
      id: 2,
    },
    reviewId: 2,
    createdAt: '방금 전',
    content: '이 코드에서 생성자가 조금 이상합니다. 다시 확인해주세요.',
    likeCount: 16,
  },
  {
    user: {
      profileImageUrl: 'test.com/sundo.png',
      nickname: '김선도',
      id: 2,
    },
    reviewId: 4,
    createdAt: '방금 전',
    content: '이 코드에서 생성자가 조금 이상합니다. 다시 확인해주세요.',
    likeCount: 38,
  },
  {
    user: {
      profileImageUrl: 'test.com/sundo.png',
      nickname: '김선도',
      id: 2,
    },
    reviewId: 12,
    createdAt: '방금 전',
    content: `이 코드에서 생성자가 조금 이상합니다. 다시 확인해주세요.
      세션 유저가 해당 리뷰건에 대해 즐겨찾기 여부.세션유저가 즐겨찾기 한 경우 true, 세션유저가 자신의 프로필이 아니거나, 즐겨찾기를 하지 않은 경우 false
      리뷰 상태 PENDING(진행중), RESOLVED(해결 완료)
      `,
    likeCount: 91,
  },
];

const Response = () => {
  return (
    <div>
      <p className="mb-6 text-2xl font-semibold text-B900">인기있는 리뷰</p>
      <div className="grid grid-cols-4 gap-x-6">
        {comments.map((data) => (
          <ResponseCodeReviewCard
            key={data.reviewId}
            {...data.user}
            reviewId={data.reviewId}
            comment={data.content}
            isKoiGuideVisible={!!data.koiType}
            koiGuideContent={
              <>
                <img
                  src={`/images/koi/${data.koiType}.jpg`}
                  alt="koi"
                  className="h-12 w-12"
                />
              </>
            }
            count={data.likeCount}
            isLiked={data.isLiked}
            isEllipsis={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Response;
