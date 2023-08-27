import TextEditor from '../ui/TextEditor';
import ResponseCodeReviewCard from '../ui/cards/ResponseCodeReviewCard';
import { Comment } from '../../types/review';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../ui/Button';

const Comments = () => {
  const { id } = useParams();
  const [data, setData] = useState<Comment[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { comments },
      } = await axios.get<{ comments: Comment[] }>(
        `/api/code-reviews/${id}/comments`
      );

      setData([...comments]);
    };

    fetch();
  }, [id]);

  return (
    <>
      <div className="flex flex-auto flex-col gap-8">
        {data.map((comment) => (
          <div className="w-4/5">
            <ResponseCodeReviewCard
              key={comment.id}
              {...comment.user}
              reviewId={comment.id}
              comment={comment.content}
              isKoiGuideVisible={false}
              count={comment.likeCount}
              isLiked={comment.liked}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-3xl bg-white p-7 shadow-lg">
        <TextEditor height="160px" />
        <div className="mt-4 text-right">
          <Button>작성</Button>
        </div>
      </div>
    </>
  );
};

export default Comments;
