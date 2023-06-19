export interface Activity {
  codeReview: number;
}

export interface Skill {
  id: number;
  name: string;
}

export interface Profile {
  me: boolean;
  nickname: string;
  email: string;
  years: number;
  introduce?: string;
  profileImageUrl?: string;
  activity: Activity;
  skills: Skill[];
}

export interface User {
  profileImageUrl?: string;
  id: number;
  nickname: string;
}
