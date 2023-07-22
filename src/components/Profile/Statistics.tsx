import React, { useEffect, useRef, useState } from 'react';
import { Skill } from '../../types/user';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface SkillType extends Skill {
  count: number;
}

const Statistics = () => {
  const { id } = useParams();
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const [minWidth, setMinWidth] = useState(0);
  const [skillStatistics, setSkillStatistics] = useState<SkillType[]>([]);

  const calcPercent = (count: number) => {
    const total = skillStatistics.reduce((acc, cur) => acc + cur.count, 0);
    return Math.round((count / total) * 100);
  };

  useEffect(() => {
    const max = Math.max.apply(
      null,
      refs.current.map((span) => (span ? span.offsetWidth : 0))
    );
    setMinWidth(max);
  }, [refs]);

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { skills },
      } = await axios.get<{ skills: SkillType[] }>(
        `/api/users/${id}/skills/statistics`
      );

      setSkillStatistics(skills);
    };

    fetch();
  }, [id]);

  return (
    <div className="flex-auto">
      <div className="rounded-3xl bg-B50 p-6">
        <p className="mb-4 text-xl font-bold text-B900">
          어떤 키워드를 많이 사용 했냐면요!
        </p>
        {skillStatistics.length ? (
          <ul>
            {skillStatistics.map(({ id, name, count }, index) => {
              const width = calcPercent(count);

              const [fontColor, barColor, countColor] = (() => {
                switch (index) {
                  case 0:
                    return ['text-GREEN', 'bg-B600', 'text-B50'];
                  case 1:
                    return ['text-PINK', 'bg-B600', 'text-B50'];
                  default:
                    return ['text-B600', 'bg-B200', 'text-B700'];
                }
              })();

              return (
                <li className="flex items-center pb-4" key={id}>
                  <span
                    ref={(itself) => (refs.current[index] = itself)}
                    style={{ minWidth: `${minWidth}px` }}
                    className={`${fontColor} mr-4 text-base font-semibold`}
                  >
                    {name}
                  </span>
                  <div
                    className={`h-10 ${barColor} relative flex items-center rounded-r-lg`}
                    style={{ width: `${width}%` }}
                  >
                    <span
                      className={`${countColor} ml-auto mr-2 text-base font-medium`}
                    >
                      {count}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-l mb-6 text-center font-semibold text-B600">
              아직 키워드를 분석할 활동이 없어요
              <br />
              활동을 통해 내가 자주 활동한 키워드를 확인해보세요.
            </p>
            <img
              src={`/images/worry_emoji.png`}
              alt="worry_emoji"
              className="w-32"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
