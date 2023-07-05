import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderBase: Story = {
  args: {},
};
