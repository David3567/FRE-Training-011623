import { UserRole } from "./user-auth.interface";

export interface AppUserAuthCookie {
    id: string;
    username: string;
    email: string;
    role: UserRole;
    tmdb_key: string;
  }