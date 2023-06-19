import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Profile from './Profile';

const meta = {
  title: 'Profile',
  component: Profile,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileImageEmpty: Story = {
  args: {
    nickname: 'example1',
    id: 1,
  },
};

export const ProfileImageError: Story = {
  args: {
    profileImageUrl: 'error',
    nickname: 'example2',
    id: 2,
  },
};

export const ProfileImageLoaded: Story = {
  args: {
    nickname: 'example3',
    id: 3,
    profileImageUrl:
      'https://k.kakaocdn.net/dn/3kvs9/btrHPeu3SVX/mk2efO7WsPvzvytL01bV1K/img_110x110.jpg',
  },
};
