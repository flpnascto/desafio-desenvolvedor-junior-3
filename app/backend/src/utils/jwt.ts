import jwt, { SignOptions } from 'jsonwebtoken';
import { IUserPayload } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const singOptions: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '10d',
};
class Authentication {
  static createToken(payload: IUserPayload): string {
    const token = jwt.sign(payload, JWT_SECRET, singOptions);
    return token;
  }

  static validateToken(token: string): IUserPayload {
    const payload = jwt.verify(token, JWT_SECRET) as IUserPayload;
    return payload;
  }
}
export default Authentication;
