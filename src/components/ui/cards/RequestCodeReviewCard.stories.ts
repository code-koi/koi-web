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
    id: 'yuntaengtaeng',
    link: '/test',
    title: '글 제목',
    timestamp: '2시간 전',
    isResolved: true,
    uid: 'testId1',
    isFavorite: false,
    hashTag: ['JAVA', 'Spring boot'],
  },
};
