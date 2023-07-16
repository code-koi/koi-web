import React, { useEffect, useState } from 'react';
import Chip from '../ui/Chip';
import axios from 'axios';
import { Skill } from '../../types/user';

const PopularTags = () => {
  const [tags, setTags] = useState<Skill[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          data: { skills },
        } = await axios.get<{ skills: Skill[] }>('/api/skills/rank');
        setTags(skills);
      } catch (error) {}
    };

    fetch();
  }, []);

  return (
    <div className="rounded-3xl bg-white p-7 shadow-lg">
      <p className="mb-9 text-center text-xl font-semibold">인기태그</p>
      <div className="flex flex-wrap">
        {tags.map(({ name, id }) => (
          <Chip label={name} id={id} isActive={true} margin="mr-2 mt-2" />
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
