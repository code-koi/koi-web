import React, { useEffect, useState } from 'react';
import RequestCodeReviewCard from '../../ui/cards/RequestCodeReviewCard';
import { Review } from '../../../types/review';
import axios from 'axios';

const Request = () => {
  const [codeReviews, setCodeReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { reviews },
      } = await axios.get<{ reviews: Review[] }>('/api/code-reviews/hot');

      setCodeReviews(reviews);
    };

    fetch();
  }, []);

  return (
    <div>
      <p className="mb-6 text-2xl font-semibold text-B900">인기있는 코드리뷰</p>
      <div className="grid grid-cols-4 gap-x-6">
        {codeReviews.map((data) => (
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
    </div>
  );
};

export default Request;
