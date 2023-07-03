import React, { useState, useEffect } from 'react';
import ResponseCodeReviewCard from '../../ui/cards/ResponseCodeReviewCard';
import { Comment } from '../../../types/review';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResponseCodeReviewTab = () => {
  const [list, setList] = useState<Comment[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { comments },
      } = await axios.get<{ comments: Comment[] }>(`/api/users/${id}/comments`);

      setList(comments);
    };

    fetch();
  }, [id]);

  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {list.map((data) => (
        <ResponseCodeReviewCard
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
          isLiked={false}
        />
      ))}
    </div>
  );
};

export default ResponseCodeReviewTab;
