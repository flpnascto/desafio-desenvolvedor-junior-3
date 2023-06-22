import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  constructor(private service: UserService) {}

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const user = await this.service.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
