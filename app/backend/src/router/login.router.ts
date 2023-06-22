import { Router } from 'express';
import UserModel from '../models/user.model';
import LoginController from '../controllers/login.controller';
import LoginService from '../services/login.service';

const userModel = new UserModel();
const loginService = new LoginService(userModel);
const loginController = new LoginController(loginService);

const userRouter = Router();

userRouter.post('/', (req, res, next) => loginController.login(req, res, next));

export default userRouter;
