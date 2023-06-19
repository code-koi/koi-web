import { User } from './user';

export interface Review {
  user: User;
  createdAt: string;
  title: string;
  status: 'PENDING' | 'RESOLVED';
  skills: string[];
}
