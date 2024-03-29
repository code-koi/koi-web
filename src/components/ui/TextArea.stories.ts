import type { Meta, StoryObj } from '@storybook/react';

import TextArea from './TextArea';

const meta = {
  title: 'TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextAreaBase: Story = {
  args: {
    value: 'value',
    onChange: () => {},
  },
};
