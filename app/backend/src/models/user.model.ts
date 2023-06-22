import { IUser, INewUser } from '../interfaces';
import { IModelReader, IModelSearch } from './interfaces/IModel';
import prisma from './prisma.client';

class UserModel implements IModelReader<IUser>, IModelSearch<IUser> {
  getByField(
    field: string,
    value: string | number | boolean | Date
  ): Promise<IUser | null> {
    return this.connection.user.findUnique({ where: { [field]: value } });
  }

  getAll(): Promise<IUser[] | null> {
    throw new Error('Method not implemented.');
  }

  getById(id: string): Promise<IUser | null> {
    return this.connection.user.findUnique({ where: { id: Number(id) } });
  }

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
