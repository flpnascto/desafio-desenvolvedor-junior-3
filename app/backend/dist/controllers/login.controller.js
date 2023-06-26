"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginController {
    constructor(service) {
        this.service = service;
    }
    async login(req, res, next) {
        try {
            const token = await this.service.login(req.body);
            res.status(200).json({ token });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = LoginController;
