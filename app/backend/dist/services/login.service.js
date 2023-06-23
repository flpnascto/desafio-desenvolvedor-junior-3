"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = __importDefault(require("../utils/jwt"));
const UserValidate_1 = __importDefault(require("./validations/UserValidate"));
class LoginService {
    constructor(model) {
        this.model = model;
    }
    async login(login) {
        const user = await this.model.getByField('email', login.email);
        UserValidate_1.default.validateLogin(login, user);
        const payload = {
            id: user?.id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
        };
        return jwt_1.default.createToken(payload);
    }
}
exports.default = LoginService;
