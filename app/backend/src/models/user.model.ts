import { IUser, INewUser } from '../interfaces';
import { IModelWriter } from './interfaces/IModel';
import prisma from './prisma.client';

class UserModel implements IModelWriter<IUser> {
  update(_arg: IUser): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  private connection = prisma;

  async create(user: INewUser): Promise<IUser> {
    const newUser = await this.connection.user.create({
      data: user,
    });

    return newUser;
  }
}

export default UserModel;
