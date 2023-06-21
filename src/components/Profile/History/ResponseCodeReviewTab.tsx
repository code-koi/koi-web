import React, { useState, useEffect } from 'react';
import ResponseCodeReviewCard from '../../ui/cards/ResponseCodeReviewCard';
import { Comment } from '../../../types/review';
import axios from 'axios';

const ResponseCodeReviewTab = () => {
  const [list, setList] = useState<Comment[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { comments },
      } = await axios.get<{ comments: Comment[] }>(
        '/api/code-comments?userId=2'
      );
      setList(comments);
    };

    fetch();
  }, []);

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
        />
      ))}
    </div>
  );
};

export default ResponseCodeReviewTab;
