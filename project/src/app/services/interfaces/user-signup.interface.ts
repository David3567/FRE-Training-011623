export class AppUserRegister {
    username: string = '';
    password: string = '';
    email: string = '';
    role: string = '';
    tmdb_key: string = '';
  }

export interface UserInfo {
    email?: string;
    password?: string;
    username?: string;
    tmdb_key?: string;
  }