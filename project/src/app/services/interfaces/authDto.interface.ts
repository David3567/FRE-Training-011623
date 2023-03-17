import { UserRole } from "./user-auth.interface";

export interface AuthDto {
  accessToken: string;
  role: UserRole;
}
