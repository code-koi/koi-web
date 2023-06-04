import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import FloatingWriteButton from './FloatingWriteButton';

const meta = {
  title: 'FloatingWriteButton',
  component: FloatingWriteButton,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
} satisfies Meta<typeof FloatingWriteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FloatingWriteButtonBase: Story = {
  args: {
    link: '/edit',
  },
};
