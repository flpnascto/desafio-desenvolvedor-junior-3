import { Router } from 'express';
import UserController from '../controllers/user.controller';
import UserService from '../services/user.service';
import UserModel from '../models/user.model';

const userModel = new UserModel();
const userService = new UserService(userModel);
const userController = new UserController(userService);

const userRouter = Router();

userRouter.post('/', (req, res, next) => userController.create(req, res, next));

export default userRouter;
