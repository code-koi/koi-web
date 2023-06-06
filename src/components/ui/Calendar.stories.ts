import type { Meta, StoryObj } from '@storybook/react';

import Calendar from './Calendar';

const meta = {
  title: 'Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarBase: Story = {
  args: {
    month: 6,
    onDayClickHandler: () => {},
  },
};
