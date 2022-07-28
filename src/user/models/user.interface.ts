export interface UserI {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role?: UserRole;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
