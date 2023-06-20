export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt?: Date;
}

export type INewUser = Omit<IUser, 'id' | 'createdAt'>;
