import type { Meta, StoryObj } from '@storybook/react';

import Tab from './Tab';

const meta = {
  title: 'Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnSelectedTab: Story = {
  args: {
    label: 'Tab1',
    isSelected: false,
    onClick: () => {},
  },
};

export const SelectedTab: Story = {
  args: {
    label: 'Tab2',
    isSelected: true,
    onClick: () => {},
  },
};
