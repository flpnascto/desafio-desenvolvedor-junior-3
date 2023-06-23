"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const singOptions = {
    algorithm: 'HS256',
    expiresIn: '10d',
};
class Authentication {
    static createToken(payload) {
        const token = jsonwebtoken_1.default.sign(payload, JWT_SECRET, singOptions);
        return token;
    }
    static validateToken(token) {
        const payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        return payload;
    }
}
exports.default = Authentication;
