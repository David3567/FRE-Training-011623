export interface userToAdd {
  username: string;
  password: string;
  email: string;
  role: string;
  tmdb_key: string;
}

export interface UserSubInfo {
  email?: string;
  password?: string;
  username?: string;
  tmdb_key?: string;
  role?: string;
}

export interface AppUserAuthCookie {
  id: string;
  username: string;
  email: string;
  role: string;
  tmdb_key: string;
}
export interface UserLoginInfo {
  email: string;
  password: string;
}

export interface AppUserToken {
  accessToken: string;
  role: string;
}
