import React, { useEffect, useState } from 'react';
import RequestCodeReviewCard from '../../ui/cards/RequestCodeReviewCard';
import axios from 'axios';
import { Review } from '../../../types/review';

const FavoriteCodeReviewTab = () => {
  const [list, setList] = useState<Review[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { reviews },
      } = await axios.get<{ reviews: Review[] }>('/api/code-reviews?userId=2');
      setList(reviews);
    };

    fetch();
  }, []);

  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {list.map((data) => (
        <RequestCodeReviewCard
          reviewId={data.reviewId}
          {...data.user}
          timestamp={data.createdAt}
          title={data.title}
          isFavorite={true}
          status={data.status}
          hashTag={data.skills}
        />
      ))}
    </div>
  );
};

export default FavoriteCodeReviewTab;
