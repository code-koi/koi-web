import type { Meta, StoryObj } from '@storybook/react';

import Chip from './Chip';

const meta = {
  title: 'Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultChip: Story = {
  args: {
    id: 'testId1',
    label: 'DefaultChip',
    isActive: false,
    onClickHandler: () => {},
  },
};

export const ActiveChip: Story = {
  args: {
    id: 2,
    label: 'ActiveChip',
    isActive: true,
    onClickHandler: () => {},
    onDeleteHandler: () => {},
  },
};
