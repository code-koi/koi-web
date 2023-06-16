import React, { useState, useCallback, useMemo } from 'react';
import TabSelector from '../ui/TabSelector';
import * as Components from './History//index';

const History = () => {
  const [selectedTab, setSelectedTab] = useState('요청한 코드 리뷰');

  const handleTabChange = useCallback((label: string) => {
    setSelectedTab(label);
  }, []);

  const renderTabContent = useMemo(() => {
    switch (selectedTab) {
      case '요청한 코드 리뷰':
        return <Components.RequestCodeReviewTab />;
      case '남긴 코드 리뷰':
        return <Components.ResponseCodeReviewTab />;
      case '즐겨찾기':
        return <Components.FavoriteCodeReviewTab />;
      default:
        return null;
    }
  }, [selectedTab]);

  return (
    <div className="mx-10 w-2/3">
      <TabSelector
        containerClassName="w-full"
        selectedLabel={selectedTab}
        chipClassName="flex-auto"
        labels={['요청한 코드 리뷰', '남긴 코드 리뷰', '즐겨찾기']}
        onChangeHandler={handleTabChange}
      />
      <div>{renderTabContent}</div>
    </div>
  );
};

export default History;
