import { NextFunction, Request, Response } from 'express';
import UnauthorizedException from '../exceptions/Unauthorized';
import Authentication from '../utils/jwt';

class AuthMiddleware {
  async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const token = req.headers.authorization;
    try {
      const payload = Authentication.validateToken(token as string);
      req.body.auth = payload;
      next();
    } catch (error) {
      const err = new UnauthorizedException('Invalid token');
      next(err);
    }
  }
}

export default AuthMiddleware;
