import React, { useEffect, useRef, useState } from 'react';

const dummy_data: { [key: string]: number } = {
  JAVA: 24,
  Spring: 15,
  React: 8,
  Vue: 2,
};

const Statistics = () => {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const [minWidth, setMinWidth] = useState(0);

  const calcPercent = (key: string) => {
    const total = Object.values(dummy_data).reduce((acc, cur) => acc + cur, 0);
    return Math.round((dummy_data[key] / total) * 100);
  };

  useEffect(() => {
    const max = Math.max.apply(
      null,
      refs.current.map((span) => (span ? span.offsetWidth : 0))
    );
    setMinWidth(max);
  }, [refs]);

  return (
    <div className="flex-auto">
      <div className="rounded-3xl bg-B50 p-6">
        <p className="mb-4 text-xl font-bold text-B900">
          어떤 키워드를 많이 사용 했냐면요!
        </p>
        <ul>
          {Object.entries(dummy_data).map(
            ([k, v]: [k: string, value: number], index) => {
              const width = calcPercent(k);

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
                <li className="flex items-center pb-4" key={k}>
                  <span
                    ref={(itself) => (refs.current[index] = itself)}
                    style={{ minWidth: `${minWidth}px` }}
                    className={`${fontColor} mr-4 text-base font-semibold`}
                  >
                    {k}
                  </span>
                  <div
                    className={`h-10 ${barColor} relative flex items-center rounded-r-lg`}
                    style={{ width: `${width}%` }}
                  >
                    <span
                      className={`${countColor} ml-auto mr-2 text-base font-medium`}
                    >
                      {v}
                    </span>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default Statistics;
