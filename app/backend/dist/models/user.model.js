"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_client_1 = __importDefault(require("./prisma.client"));
class UserModel {
    constructor() {
        this.connection = prisma_client_1.default;
    }
    getByField(field, value) {
        return this.connection.user.findUnique({ where: { [field]: value } });
    }
    getAll() {
        throw new Error('Method not implemented.');
    }
    getById(id) {
        return this.connection.user.findUnique({ where: { id: Number(id) } });
    }
    update(_arg) {
        throw new Error('Method not implemented.');
    }
    async create(user) {
        const newUser = await this.connection.user.create({
            data: user,
        });
        return newUser;
    }
}
exports.default = UserModel;
