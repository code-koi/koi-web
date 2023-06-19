import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types/user';

export interface Props extends User {
  containerClassName?: string;
}

const DEFAULT_IMG_URL = '/images/profile_placeholder.png';

const Profile = (props: Props) => {
  const navigate = useNavigate();

  const moveProfile = () => {
    navigate(props.id);
  };

  return (
    <div
      className={`flex items-center ${props.containerClassName || ''}`}
      onClick={moveProfile}
    >
      <img
        onError={(e) => {
          e.currentTarget.src = DEFAULT_IMG_URL;
        }}
        className="h-7 w-7 rounded-full"
        src={props.profileImageUrl}
        alt="profileIMG"
      />
      <p className="text-l ml-4">{props.nickname}</p>
    </div>
  );
};

Profile.defaultProps = {
  profileImageUrl: DEFAULT_IMG_URL,
};

export default Profile;
