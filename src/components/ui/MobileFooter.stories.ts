import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import MobileFooter from './MobileFooter';

const meta = {
  title: 'MobileFooter',
  component: MobileFooter,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
} satisfies Meta<typeof MobileFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MobileFooterBase: Story = {
  args: {},
};
