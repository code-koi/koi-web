import type { Meta, StoryObj } from '@storybook/react';

import ReviewRating from './ReviewRating';

const meta = {
  title: 'ReviewRating',
  component: ReviewRating,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ReviewRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReviewRatingBase: Story = {
  args: {
    count: '67',
    score: '4.6',
  },
};
