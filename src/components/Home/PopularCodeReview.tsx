import React from 'react';
import Request from './PopularCodeReview/Request';
import Response from './PopularCodeReview/Response';

const PopularCodeReview = () => {
  return (
    <div>
      <Request />
      <div className="pb-10"></div> {/* empty space */}
      <Response />
    </div>
  );
};

export default PopularCodeReview;
