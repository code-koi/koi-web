import React from 'react';
import Information from '../components/Profile/Information';
import History from '../components/Profile/History';
import useDeviceType from '../hooks/useDeviceType';

const Profile = () => {
  const type = useDeviceType();
  return (
    <div className="flex pt-7">
      <Information />
      {type === 'Web' && <History />}
    </div>
  );
};

export default Profile;
