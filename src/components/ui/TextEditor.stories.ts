import type { Meta, StoryObj } from '@storybook/react';

import TextEditor from './TextEditor';

const meta = {
  title: 'TextEditor',
  component: TextEditor,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextEditorBase: Story = {
  args: {},
};
