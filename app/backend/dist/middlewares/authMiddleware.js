"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Unauthorized_1 = __importDefault(require("../exceptions/Unauthorized"));
const jwt_1 = __importDefault(require("../utils/jwt"));
class AuthMiddleware {
    async register(req, res, next) {
        const token = req.headers.authorization;
        try {
            const payload = jwt_1.default.validateToken(token);
            req.body.auth = payload;
            next();
        }
        catch (error) {
            const err = new Unauthorized_1.default('Invalid token');
            next(err);
        }
    }
}
exports.default = AuthMiddleware;
