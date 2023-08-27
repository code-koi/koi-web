import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewDetail } from '../../types/review';
import Profile from '../ui/Profile';
import Tag from '../ui/Tag';
import Chip from '../ui/Chip';

const ArticleInformation = () => {
  const { id } = useParams();
  const [data, setData] = useState<ReviewDetail | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { review },
      } = await axios.get<{ review: ReviewDetail }>(`/api/code-reviews/${id}`);

      setData(review);
    };

    fetch();
  }, [id]);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="mb-3">
        <Tag
          theme={data.status === 'RESOLVED' ? 'GREEN' : 'PINK'}
          label={`${data.status === 'RESOLVED' ? '해결' : '미해결'}`}
        />
      </div>
      <div className="mb-8 flex items-center justify-between">
        <Profile
          id={data.user.id}
          profileImageUrl={data.user.profileImageUrl}
          nickname={data.user.nickname}
        />
        <span className="text-base text-B500">{data.createdAt}</span>
      </div>
      <h2 className="mb-3 text-xl font-bold">{data.title}</h2>
      <div className="mb-3">
        {data.skills.map((skill) => (
          <Chip id={skill} label={skill} isActive={true} margin="mr-2" />
        ))}
      </div>
      <p>{data.content}</p>
    </>
  );
};

export default ArticleInformation;
