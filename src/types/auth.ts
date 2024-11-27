export type UserRole = 'employee' | 'employer' | 'admin';

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}