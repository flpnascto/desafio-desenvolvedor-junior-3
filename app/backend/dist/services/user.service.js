"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserValidate_1 = __importDefault(require("./validations/UserValidate"));
class UserService {
    constructor(model) {
        this.model = model;
    }
    async create(user) {
        UserValidate_1.default.validateNewUser(user);
        const newUser = await this.model.create(user);
        return newUser;
    }
}
exports.default = UserService;
