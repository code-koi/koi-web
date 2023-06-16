import React from 'react';
import Information from '../components/Profile/Information';
import History from '../components/Profile/History';

const Profile = () => {
  return (
    <div className="flex pt-7">
      <Information />
      <History />
    </div>
  );
};

export default Profile;
