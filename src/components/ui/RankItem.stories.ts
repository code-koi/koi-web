import type { Meta, StoryObj } from '@storybook/react';

import RankItem from './RankItem';

const meta = {
  title: 'RankItem',
  component: RankItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RankItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RankItemFirst: Story = {
  args: {
    rank: 1,
    children: 'children',
  },
};

export const RankItemSecond: Story = {
  args: {
    rank: 2,
    children: 'children',
  },
};
export const RankItemThird: Story = {
  args: {
    rank: 3,
    children: 'children',
  },
};
