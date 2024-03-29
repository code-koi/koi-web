import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallButton: Story = {
  args: {
    size: 'small',
    children: 'Button',
    className: '',
    onClick: () => {},
  },
};

export const MediumButton: Story = {
  args: {
    size: 'medium',
    children: 'Button',
    className: '',
    onClick: () => {},
  },
};
export const LargeButton: Story = {
  args: {
    size: 'large',
    children: 'Button',
    className: '',
    onClick: () => {},
  },
};

export const DisabledButton: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export const RoundedButton: Story = {
  args: {
    children: 'Button',
    isRounded: true,
  },
};
