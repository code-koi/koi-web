import React, { useEffect, useState } from 'react';
import RequestCodeReviewCard from '../../ui/cards/RequestCodeReviewCard';
import axios from 'axios';
import { Review } from '../../../types/review';
import { useParams } from 'react-router-dom';

const FavoriteCodeReviewTab = () => {
  const [list, setList] = useState<Review[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { reviews },
      } = await axios.get<{ reviews: Review[] }>(`/api/users/${id}/favorite`);
      setList(reviews);
    };

    fetch();
  }, [id]);

  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {list.map((data) => (
        <RequestCodeReviewCard
          key={data.id}
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
  );
};

export default FavoriteCodeReviewTab;
