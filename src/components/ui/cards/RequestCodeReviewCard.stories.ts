import type { Meta, StoryObj } from '@storybook/react';

import RequestCodeReviewCard from './RequestCodeReviewCard';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'RequestCodeReviewCard',
  component: RequestCodeReviewCard,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
} satisfies Meta<typeof RequestCodeReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RequestCodeReviewCardBase: Story = {
  args: {
    id: 1,
    nickname: 'nickname',
    timestamp: '2시간 전',
    title: 'title',
    status: 'PENDING',
    isFavorite: false,
    hashTag: ['JAVA'],
  },
};
