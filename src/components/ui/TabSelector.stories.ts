import type { Meta, StoryObj } from '@storybook/react';

import TabSelector from './TabSelector';

const meta = {
  title: 'TabSelector',
  component: TabSelector,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TabSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tabs: Story = {
  args: {
    labels: ['Tab1', 'Tab2', 'Tab3'],
    selectedLabel: 'Tab1',
    onChangeHandler: (label) => {},
  },
};
