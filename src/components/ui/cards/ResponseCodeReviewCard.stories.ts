import type { Meta, StoryObj } from '@storybook/react';

import ResponseCodeReviewCard from './ResponseCodeReviewCard';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'ResponseCodeReviewCard',
  component: ResponseCodeReviewCard,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
} satisfies Meta<typeof ResponseCodeReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResponseCodeReviewCardBase: Story = {
  args: {
    nickname: 'yuntaengtaeng',
    id: 1,
    isKoiGuideVisible: true,
    comment: '글',
  },
};
