import React, { useEffect, useState } from 'react';
import ResponseCodeReviewCard from '../../ui/cards/ResponseCodeReviewCard';
import axios from 'axios';
import { Comment } from '../../../types/review';

const Response = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { comments },
      } = await axios.get<{ comments: Comment[] }>('/api/comments/hot');

      setComments(comments);
    };

    fetch();
  }, []);

  return (
    <div>
      <p className="mb-6 text-2xl font-semibold text-B900">인기있는 리뷰</p>
      <div className="grid grid-cols-4 gap-x-6">
        {comments.map((data) => (
          <ResponseCodeReviewCard
            key={data.id}
            {...data.user}
            reviewId={data.id}
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
            isLiked={data.liked}
            isEllipsis={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Response;
