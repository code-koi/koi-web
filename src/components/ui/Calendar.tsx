import React from 'react';
import dayjs, { Dayjs } from 'dayjs';

/*
TODO : activeDatas Type 백엔드와 논의 필요

- isActiveDate : 현재는 오늘 날짜가 활성화 되도록 구현했지만 activeDatas을 이용하여 활성화되도록 변경 필요
*/

interface CalendarProps {
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  onDayClickHandler?: (date: Dayjs) => void;
  activeDatas?: Dayjs[];
}

const Calendar: React.FC<CalendarProps> = ({
  month,
  onDayClickHandler,
  activeDatas,
}) => {
  const weeks: Dayjs[][] = getWeeksOfMonth(month);

  const isActiveDate = (date: Dayjs): boolean => {
    const today = dayjs();
    return date && date.isSame(today, 'day');
  };

  return (
    <div className="w-fit rounded border border-gray-300 bg-white p-2">
      {weeks.map((week, index) => (
        <div key={index} className="flex space-x-2">
          {week.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={`flex h-10 w-10 cursor-pointer items-center justify-center ${
                isActiveDate(day) ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => {
                if (onDayClickHandler) {
                  onDayClickHandler(day);
                }
              }}
            >
              {day.date() || ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const getWeeksOfMonth = (month: number): Dayjs[][] => {
  const weeks: Dayjs[][] = [];
  const firstDayOfMonth = dayjs()
    .month(month - 1)
    .startOf('month');
  const lastDayOfMonth = dayjs()
    .month(month - 1)
    .endOf('month');

  let currentDate = firstDayOfMonth;
  let currentWeek: Dayjs[] = [];

  for (let i = 0; i < firstDayOfMonth.day(); i++) {
    currentWeek.push(dayjs(null));
  }

  while (currentDate <= lastDayOfMonth) {
    currentWeek.push(currentDate);

    if (currentDate.day() === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentDate = currentDate.add(1, 'day');
  }

  for (let i = currentWeek.length; i < 7; i++) {
    currentWeek.push(dayjs(null));
  }

  weeks.push(currentWeek);

  return weeks;
};

export default Calendar;
