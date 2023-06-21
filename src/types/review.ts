import { User } from './user';

export type KoiType = 'FISHBOWL' | 'STREAM' | 'RIVER' | 'SEA';

export interface Review {
  reviewId: number;
  user: User;
  createdAt: string;
  title: string;
  status: 'PENDING' | 'RESOLVED';
  skills: string[];
}

export interface Comment {
  user: User;
  createdAt: string;
  reviewId: number;
  content: string;
  koiType?: KoiType;
}
