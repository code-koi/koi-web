import type { Meta, StoryObj } from '@storybook/react';

import TextInput from './TextInput';

const meta = {
  title: 'TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInputBase: Story = {
  args: {
    value: 'value',
  },
};

export const TextInputDisable: Story = {
  args: {
    value: 'value',
    disabled: true,
  },
};

export const TextInputWidthFull: Story = {
  args: {
    value: 'value',
    width: 'w-full',
  },
};
