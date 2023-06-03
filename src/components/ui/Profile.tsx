import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: string;
  profileIMG?: string;
  link: string;
}

const DEFAULT_IMG_URL = '/images/profile_placeholder.png';

const Profile = (props: Props) => {
  const navigate = useNavigate();

  const moveProfile = () => {
    navigate(props.link);
  };

  return (
    <div className="flex items-center" onClick={moveProfile}>
      <img
        onError={(e) => {
          e.currentTarget.src = DEFAULT_IMG_URL;
        }}
        className="h-7 w-7 rounded-full"
        src={props.profileIMG}
        alt="profileIMG"
      />
      <span className="ml-4">{props.id}</span>
    </div>
  );
};

Profile.defaultProps = {
  profileIMG: DEFAULT_IMG_URL,
};

export default Profile;
