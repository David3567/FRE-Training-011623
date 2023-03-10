export interface AddNewUser {
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
