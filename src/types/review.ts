import { User } from './user';

export type KoiType = 'FISHBOWL' | 'STREAM' | 'RIVER' | 'SEA';

export interface Review {
  id: number;
  user: User;
  createdAt: string;
  title: string;
  status: 'PENDING' | 'RESOLVED';
  skills: string[];
}

export interface ReviewDetail extends Review {
  me: boolean;
  content: string;
}

export interface Comment {
  user: User;
  createdAt: string;
  id: number;
  content: string;
  koiType?: KoiType;
  likeCount: number;
  liked?: boolean;
}
