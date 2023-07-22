import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Log {
  createdAt: string;
  log: string;
  reviewId: number;
}

const ActivityFeed = () => {
  const { id } = useParams();

  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { logs },
      } = await axios.get<{ logs: Log[] }>(`/api/users/${id}/logs`);
      setLogs(logs);
    };

    fetch();
  }, [id]);

  return (
    <div>
      <p className="mb-2 text-sm font-bold text-B900">활동 기록</p>
      <ul>
        {logs.map(({ reviewId, log, createdAt }, i) => (
          <li
            key={reviewId + log}
            className={`relative flex items-start pb-4 before:absolute before:bottom-0 before:left-[7.5px] before:top-0 before:bg-PURPLE before:content-[''] ${
              logs.length !== i + 1 && 'before:w-px'
            }`}
          >
            <div className="h-4 w-4 rounded-full bg-PURPLE"></div>
            <div className="ml-4">
              <p className="text-xs text-B500">{createdAt}</p>
              <p className="text-sm text-B700">{log}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
