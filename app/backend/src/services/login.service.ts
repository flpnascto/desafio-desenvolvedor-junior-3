import { ILogin, IUser, IUserPayload } from '../interfaces';
import { IModelSearch } from '../models/interfaces/IModel';
import Authentication from '../utils/jwt';
import UserValidate from './validations/UserValidate';

class LoginService {
  constructor(private model: IModelSearch<IUser>) {}

  async login(login: ILogin): Promise<string> {
    const user = await this.model.getByField('email', login.email);
    UserValidate.validateLogin(login, user);
    const payload = {
      id: user?.id,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
    };
    return Authentication.createToken(payload as IUserPayload);
  }
}

export default LoginService;
