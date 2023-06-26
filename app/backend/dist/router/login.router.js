"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_model_1 = __importDefault(require("../models/user.model"));
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
const login_service_1 = __importDefault(require("../services/login.service"));
const userModel = new user_model_1.default();
const loginService = new login_service_1.default(userModel);
const loginController = new login_controller_1.default(loginService);
const userRouter = (0, express_1.Router)();
userRouter.post('/', (req, res, next) => loginController.login(req, res, next));
exports.default = userRouter;
