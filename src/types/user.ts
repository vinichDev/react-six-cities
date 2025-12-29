export interface UserCommon {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface UserAuth {
  email: string;
  token: string;
}

export interface UserId {
  id: number;
}

export type UserFull = UserCommon & UserAuth & UserId;

export type AuthInfo = UserFull;

export interface LoginData {
  email: string;
  password: string;
}
