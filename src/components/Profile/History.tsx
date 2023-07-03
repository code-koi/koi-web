import React, { useState, useCallback, useMemo } from 'react';
import * as Components from './History//index';
import Chip from '../ui/Chip';
import Tag from '../ui/Tag';

const TAB_LIST: readonly string[] = [
  '요청한 코드 리뷰',
  '남긴 코드 리뷰',
  '즐겨찾기',
];

const History = () => {
  const [selectedTab, setSelectedTab] = useState('요청한 코드 리뷰');

  const handleTabChange = useCallback((id: string) => {
    setSelectedTab(id);
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
    <>
      <div className="flex">
        {TAB_LIST.map((text) => (
          <Chip
            key={text}
            label={text}
            id={text}
            onClickHandler={handleTabChange}
            margin="mr-2"
            isActive={selectedTab === text}
          />
        ))}
      </div>
      <div>{renderTabContent}</div>
    </>
  );
};

export default History;
