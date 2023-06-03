import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCheckbox: Story = {
  args: {
    label: 'DefaultCheckbox',
    disabled: false,
    isChecked: false,
    onChangeHandler: () => {},
  },
};

export const CheckedCheckbox: Story = {
  args: {
    label: 'CheckedCheckbox',
    disabled: false,
    isChecked: true,
    onChangeHandler: () => {},
  },
};

export const DisabledCheckbox: Story = {
  args: {
    label: 'DisabledCheckbox',
    disabled: true,
    isChecked: false,
    onChangeHandler: () => {},
  },
};

export const DisabledCheckedCheckbox: Story = {
  args: {
    label: 'DisabledCheckedCheckbox',
    disabled: true,
    isChecked: true,
    onChangeHandler: () => {},
  },
};
