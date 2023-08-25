import React, { useEffect, useState } from 'react';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';
import Chip from '../ui/Chip';
import TechSearch from '../ui/TechSearch';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Profile } from '../../types/user';
import useDeviceType from '../../hooks/useDeviceType';
import Tag from '../ui/Tag';
import useTechSearch from '../../hooks/useTechSearch';

const Information = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState<Profile | null>(null);
  const type = useDeviceType();

  const {
    selectedTechs,
    selectedTechIds,
    handler: { onResetHandler, onTechSelect },
  } = useTechSearch(profileData?.skills);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
        return;
      }

      const { data } = await axios.get<Profile>(`/api/users/${id}`);
      setProfileData(data);
    };

    fetchProfile();
  }, [id]);

  if (!profileData) {
    return null;
  }

  const className = type === 'Web' ? 'mx-10 w-1/3' : 'mx-4';

  return (
    <div className={className}>
      <div>
        <div className="mb-7 rounded-3xl bg-white p-7 shadow-lg">
          <Tag theme="PURPLE" label="내 정보" />
          <ul className="my-4">
            <li className="mb-4">
              <p className="mb-2 text-base font-medium">프로필 사진</p>
              <img
                src={
                  profileData.profileImageUrl ||
                  '/images/profile_placeholder.png'
                }
                className="h-24 w-24 rounded-full"
                alt="profileImg"
              />
            </li>

            <li className="mb-4">
              <p className="mb-2 text-base font-medium">이메일</p>
              <p className="flex-1 text-ellipsis text-base">
                {profileData.email}
              </p>
            </li>
            <li className="">
              <p className="mb-2 text-base font-medium">닉네임</p>
              <p className="flex-1 text-ellipsis text-base">
                {profileData.nickname}
              </p>
            </li>
          </ul>
        </div>
        <div className="mb-7 rounded-3xl bg-white p-7 shadow-lg">
          <Tag theme="PURPLE" label="활동내역" />
          <ul className="my-4">
            <li className="">
              <p className="mb-2 text-base font-medium">코드리뷰 활동 수</p>
              <p className="flex-1 text-ellipsis text-base">
                {profileData.activity.codeReview}
              </p>
            </li>
          </ul>
        </div>
        <div className="mb-7 rounded-3xl bg-white p-7 shadow-lg">
          <Tag theme="PURPLE" label="업무 및 스킬" />
          <ul className="my-4">
            <li className="mb-4">
              <p className="mb-2 text-base font-medium">연차</p>
              <p className="flex-1 text-ellipsis text-base">
                <select
                  className="w-full p-0 text-left outline-none"
                  value={profileData.years}
                  onChange={(event) => {
                    setProfileData({
                      ...profileData,
                      years: Number(event.target.value),
                    });
                  }}
                >
                  {[...new Array(11)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}년차
                    </option>
                  ))}
                </select>
              </p>
            </li>
            <li className="">
              <p className="mb-2 py-4 text-base font-medium">기술 스택</p>
              <div className="flex-1 text-ellipsis text-base">
                {profileData.me && (
                  <TechSearch
                    selectedTechIds={selectedTechIds}
                    onTechSelect={onTechSelect}
                    onResetHandler={onResetHandler}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="my-4">
                {selectedTechs.map((stack) => (
                  <Chip
                    id={stack.id}
                    margin="mr-2"
                    key={stack.id}
                    label={stack.name}
                    isActive={true}
                  />
                ))}
              </div>
            </li>
          </ul>
        </div>
        <div className="mb-7 rounded-3xl bg-white p-7 shadow-lg">
          <Tag theme="PURPLE" label="자기소개" />
          <ul className="my-4">
            <li className="">
              {profileData.me ? (
                <TextArea
                  className="h-64 w-full"
                  value={profileData.introduce || ''}
                  onChange={(value) => {
                    setProfileData({ ...profileData, introduce: value });
                  }}
                />
              ) : (
                <p className="whitespace-pre-line">
                  {profileData.introduce || ''}
                </p>
              )}
            </li>
          </ul>
        </div>
      </div>
      {profileData.me && (
        <Button onClick={() => {}} className="w-full" size="large" isRounded>
          저장
        </Button>
      )}
    </div>
  );
};

export default Information;
