import type { Meta, StoryObj } from '@storybook/react';

import LikeCount from './LikeCount';

const meta = {
  title: 'LikeCount',
  component: LikeCount,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LikeCount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OutlineCardBase: Story = {
  args: {
    isLiked: true,
    count: 14,
  },
};
