import BadRequestException from '../../exceptions/BadRequest';
import UnauthorizedException from '../../exceptions/Unauthorized';
import { ILogin, INewUser, IUser } from '../../interfaces';

export default class UserValidate {
  private static validateFirstName(firstName: string): void {
    if (typeof firstName !== 'string') {
      throw new BadRequestException('First name must be a string');
    }
    if (firstName.length < 2) {
      throw new BadRequestException(
        'First name must be at least 2 characters long'
      );
    }
  }

  private static validateLastName(lastName: string): void {
    if (typeof lastName !== 'string') {
      throw new BadRequestException('Last name must be a string');
    }
    if (lastName.length < 2) {
      throw new BadRequestException(
        'Last name must be at least 2 characters long'
      );
    }
  }

  private static validateEmail(email: string): void {
    if (typeof email !== 'string') {
      throw new BadRequestException('Email must be a string');
    }
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email.toLowerCase())) {
      throw new BadRequestException('Email is not valid');
    }
  }

  private static validatePassword(password: string): void {
    if (typeof password !== 'string') {
      throw new BadRequestException('Password must be a string');
    }
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      throw new BadRequestException(
        'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number'
      );
    }
  }

  private static validateEmailAndPassword(
    login: ILogin,
    user: IUser | null
  ): void {
    if (!user) {
      throw new UnauthorizedException('Invalid user');
    }
    if (login.email !== user.email) {
      throw new UnauthorizedException('Invalid user');
    }
    if (login.password !== user.password) {
      throw new BadRequestException('Invalid user');
    }
  }

  static validateNewUser(user: INewUser): void {
    UserValidate.validateFirstName(user.firstName);
    UserValidate.validateLastName(user.lastName);
    UserValidate.validateEmail(user.email);
    UserValidate.validatePassword(user.password);
  }

  static validateLogin(login: ILogin, user: IUser | null): void {
    UserValidate.validateEmail(login.email);
    UserValidate.validatePassword(login.password);
    UserValidate.validateEmailAndPassword(login, user);
  }
}
