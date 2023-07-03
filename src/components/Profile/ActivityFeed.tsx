import React from 'react';

const dummy_data = [
  { text: 'Grouped version updates for Dependabot public beta', day: '2주 전' },
  { text: 'TOTP codes for 2FA are now single-use', day: '4주 전' },
  {
    text: 'Security risk and coverage pages are now generally',
    day: '한달 전',
  },
];

const ActivityFeed = () => {
  return (
    <div>
      <p className="mb-2 text-sm font-bold text-B900">활동 기록</p>
      <ul>
        {dummy_data.map(({ text, day }, i) => (
          <li
            key={text}
            className={`relative flex items-start pb-4 before:absolute before:bottom-0 before:left-[7.5px] before:top-0 before:bg-PURPLE before:content-[''] ${
              dummy_data.length !== i + 1 && 'before:w-px'
            }`}
          >
            <div className="h-4 w-4 rounded-full bg-PURPLE"></div>
            <div className="ml-4">
              <p className="text-xs text-B500">{day}</p>
              <p className="text-sm text-B700">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
