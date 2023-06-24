import type { Meta, StoryObj } from '@storybook/react';

import OutlineCard from './OutlineCard';
import Button from './Button';

const meta = {
  title: 'OutlineCard',
  component: OutlineCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof OutlineCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OutlineCardBase: Story = {
  args: {
    topElement: 'Top',
    middleElement: 'Middle',
    bottomElement: <Button>Button</Button>,
  },
};
