import { INewUser, IUser } from '../interfaces';
import { IModelWriter } from '../models/interfaces/IModel';
import UserValidate from './validations/UserValidate';

class UserService {
  constructor(private model: IModelWriter<IUser>) {}

  async create(user: INewUser): Promise<IUser> {
    UserValidate.validateNewUser(user);
    const newUser = await this.model.create(user);

    return newUser;
  }
}

export default UserService;
