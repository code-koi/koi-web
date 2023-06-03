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
    id: 'example1',
    link: '/profile/example1',
  },
};

export const ProfileImageError: Story = {
  args: {
    id: 'example2',
    link: '/profile/example2',
    profileIMG: 'error',
  },
};

export const ProfileImageLoaded: Story = {
  args: {
    id: 'example3',
    link: '/profile/example3',
    profileIMG:
      'https://k.kakaocdn.net/dn/3kvs9/btrHPeu3SVX/mk2efO7WsPvzvytL01bV1K/img_110x110.jpg',
  },
};
