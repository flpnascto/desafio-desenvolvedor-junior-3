import BadRequestException from '../../exceptions/BadRequest';
import { INewUser } from '../../interfaces';

export default class UserValidate {
  private static validateFirstName(firstName: string): void {
    if (typeof firstName !== 'string') {
      throw new BadRequestException('First name must be a string');
    }
  }

  private static validateLastName(lastName: string): void {
    if (typeof lastName !== 'string') {
      throw new BadRequestException('Last name must be a string');
    }
  }

  private static validateEmail(email: string): void {
    if (typeof email !== 'string') {
      throw new BadRequestException('Email must be a string');
    }
  }

  private static validatePassword(password: string): void {
    if (typeof password !== 'string') {
      throw new BadRequestException('Password must be a string');
    }
  }

  static validateNewUser(user: INewUser): void {
    UserValidate.validateFirstName(user.firstName);
    UserValidate.validateLastName(user.lastName);
    UserValidate.validateEmail(user.email);
    UserValidate.validatePassword(user.password);
  }
}
