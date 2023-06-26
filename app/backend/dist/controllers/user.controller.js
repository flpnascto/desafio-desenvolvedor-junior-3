"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor(service) {
        this.service = service;
    }
    async create(req, res, next) {
        try {
            const user = await this.service.create(req.body);
            return res.status(201).json(user);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = UserController;
