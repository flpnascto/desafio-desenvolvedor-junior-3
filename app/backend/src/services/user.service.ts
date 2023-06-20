import { INewUser, IUser } from '../interfaces';
import { IModelWriter } from '../models/interfaces/IModel';

class UserService {
  constructor(private model: IModelWriter<IUser>) {}

  async create(user: INewUser): Promise<IUser> {
    const newUser = await this.model.create(user);

    return newUser;
  }
}

export default UserService;
