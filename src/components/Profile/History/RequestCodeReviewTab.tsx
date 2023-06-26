import React, { useEffect, useState } from 'react';
import RequestCodeReviewCard from '../../ui/cards/RequestCodeReviewCard';
import axios from 'axios';
import { Review } from '../../../types/review';

const RequestCodeReviewTab = () => {
  const [list, setList] = useState<Review[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { reviews },
      } = await axios.get<{ reviews: Review[] }>('/api/users/2/reviews');
      setList(reviews);
    };

    fetch();
  }, []);

  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {list.map((data) => (
        <RequestCodeReviewCard
          key={data.reviewId}
          reviewId={data.reviewId}
          {...data.user}
          timestamp={data.createdAt}
          title={data.title}
          isFavorite={false}
          status={data.status}
          hashTag={data.skills}
        />
      ))}
    </div>
  );
};

export default RequestCodeReviewTab;
