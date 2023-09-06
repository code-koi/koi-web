import React from 'react';
import ArticleInformation from '../components/CodeReviewDetail/ArticleInformation';
import Comments from '../components/CodeReviewDetail/Comments';

const CodeReviewDetail = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-auto p-12">
        <ArticleInformation />
      </div>
      <div className="flex h-full w-1/2 flex-col bg-B50 p-12">
        <Comments />
      </div>
    </div>
  );
};

export default CodeReviewDetail;
