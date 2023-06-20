import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response): Promise<Response | void> {
    const user = await this.service.create(req.body);
    return res.status(201).json(user);
  }
}

export default UserController;
