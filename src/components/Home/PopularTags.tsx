import React from 'react';
import Chip from '../ui/Chip';

const dummy_data = [
  {
    label: 'React',
    id: 'React',
  },
  {
    label: 'Vue',
    id: 'Vue',
  },
  {
    label: 'Java',
    id: 'Java',
  },
  {
    label: 'JavaScript',
    id: 'JavaScript',
  },

  {
    label: 'Spring',
    id: 'Spring',
  },
  {
    label: 'JWT',
    id: 'JWT',
  },
  {
    label: 'TypeScript',
    id: 'TypeScript',
  },
  {
    label: 'Cookie',
    id: 'Cookie',
  },
  {
    label: 'Express',
    id: 'Express',
  },
];

const PopularTags = () => {
  return (
    <div className="rounded-3xl bg-white p-7 shadow-lg">
      <p className="mb-9 text-center text-xl font-semibold">인기태그</p>
      <div className="flex flex-wrap">
        {dummy_data.map(({ label, id }) => (
          <Chip label={label} id={id} isActive={true} margin="mr-2 mt-2" />
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
