import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/login.service';

class LoginController {
  constructor(private service: LoginService) {}

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = await this.service.login(req.body);
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export default LoginController;
