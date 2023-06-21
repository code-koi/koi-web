import React, { useEffect, useState } from 'react';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';
import Chip from '../ui/Chip';
import TechSearch from '../ui/TechSearch';

import { VscDeviceCamera } from 'react-icons/vsc';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Profile } from '../../types/user';
import useDeviceType from '../../hooks/useDeviceType';

const Information = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState<Profile | null>(null);
  const type = useDeviceType();

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
      <div className="mb-7 flex justify-center">
        <div className="relative inline-flex">
          <img
            src={
              profileData.profileImageUrl || '/images/profile_placeholder.png'
            }
            className="h-20 w-20 rounded-full"
            alt="profileImg"
          />
          <div className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
            <VscDeviceCamera size={16} color="white" />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-7 border border-gray-300 bg-white px-4">
          <p className="my-5 text-xl">계정 관리</p>
          <p className="my-4 text-base text-gray-700">
            서비스에서 사용하는 내 계정 정보를 관리할 수 있습니다.
          </p>
          <ul className="my-4">
            <li className="flex items-center border-b border-gray-200 py-4">
              <p className="min-w-[120px] text-base font-medium">이메일</p>
              <p className="flex-1 text-ellipsis text-base">
                {profileData.email}
              </p>
            </li>
            <li className="flex items-center">
              <p className="min-w-[120px] py-4 text-base font-medium">닉네임</p>
              <p className="flex-1 text-ellipsis text-base">
                {profileData.nickname}
              </p>
            </li>
          </ul>
        </div>
        <div className="mb-7 border border-gray-300 bg-white px-4">
          <p className="my-5 text-xl">활동 내역</p>
          <p className="my-4 text-base text-gray-700">
            사용자의 활동내역을 확인 할 수 있습니다.
          </p>
          <ul className="my-4">
            <li className="flex items-center py-4">
              <p className="min-w-[120px] text-base font-medium">
                코드리뷰 활동 수
              </p>
              <p className="flex-1 text-ellipsis text-base">
                {profileData.activity.codeReview}
              </p>
            </li>
          </ul>
        </div>
        <div className="mb-7 border border-gray-300 bg-white px-4">
          <p className="my-5 text-xl">업무 및 스킬</p>
          <p className="my-4 text-base text-gray-700">
            사용자의 기술 스택 및 연차를 관리할 수 있습니다.
          </p>
          <ul className="my-4">
            <li className="flex items-center border-b border-gray-200 py-4">
              <p className="min-w-[120px] text-base font-medium">연차</p>
              <p className="flex-1 text-ellipsis text-base">
                <select
                  className="w-full outline-none"
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
            <li className="flex items-center border-b border-gray-200 ">
              <p className="min-w-[120px] py-4 text-base font-medium">
                기술 스택
              </p>
              <div className="flex-1 text-ellipsis text-base">
                {profileData.me && <TechSearch />}
              </div>
            </li>
            <li>
              <div className="my-4">
                {profileData.skills.map((stack) => (
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
        <div className="mb-7 border border-gray-300 bg-white px-4">
          <p className="my-5 text-xl">자기 소개</p>
          <p className="my-4 text-base text-gray-700">
            사용자의 자기소개를 작성 할 수 있습니다.
          </p>
          <ul className="my-4">
            <li className="flex items-center py-4">
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
        <Button onClick={() => {}} className="w-full">
          저장
        </Button>
      )}
    </div>
  );
};

export default Information;
