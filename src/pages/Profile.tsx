import React from 'react';
import Information from '../components/Profile/Information';
import History from '../components/Profile/History';
import useDeviceType from '../hooks/useDeviceType';
import ActivityFeed from '../components/Profile/ActivityFeed';
import Statistics from '../components/Profile/Statistics';

const Profile = () => {
  const type = useDeviceType();
  return (
    <div className="flex pt-7">
      <Information />
      {type === 'Web' && (
        <div className="mx-10 w-2/3">
          <div className="mb-8 flex">
            <Statistics />
            <div className="mr-8"></div> {/* empty Space */}
            <ActivityFeed />
          </div>
          <History />
        </div>
      )}
    </div>
  );
};

export default Profile;
