import type { Meta, StoryObj } from '@storybook/react';

import Panel from './Panel';

const meta = {
  title: 'Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PanelBase: Story = {
  args: {
    children: 'Pannel',
  },
};
