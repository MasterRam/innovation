export interface UserRole {
  userId: string;
  roleId: string;
  roleName: string;
  role?: any;
}

export interface User {
  _id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber?: any;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd?: any;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  roles: UserRole[];
  claims: any[];
  logins: any[];
  tokens: any[];
}
export interface Login {
  username: string;
  password: string;
}
