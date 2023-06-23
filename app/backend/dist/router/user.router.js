"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_service_1 = __importDefault(require("../services/user.service"));
const user_model_1 = __importDefault(require("../models/user.model"));
const userModel = new user_model_1.default();
const userService = new user_service_1.default(userModel);
const userController = new user_controller_1.default(userService);
const userRouter = (0, express_1.Router)();
userRouter.post('/', (req, res, next) => userController.create(req, res, next));
exports.default = userRouter;
