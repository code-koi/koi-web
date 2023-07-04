import React from 'react';
import MainBanner from '../components/ui/banner/MainBanner';
import PopularTags from '../components/Home/PopularTags';
import PopularCodeReview from '../components/Home/PopularCodeReview';

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-12 mt-9">
        <MainBanner />
      </div>
      <div className="mx-16 flex">
        <div className="flex-auto">
          <PopularCodeReview />
        </div>
        <div className="pr-16"></div>
        {/* empty space */}
        <div className="w-2/12">
          <PopularTags />
        </div>
      </div>
    </div>
  );
};

export default Home;
