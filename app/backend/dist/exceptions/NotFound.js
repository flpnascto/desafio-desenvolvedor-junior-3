"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = __importDefault(require("./HttpException"));
class NotFoundException extends HttpException_1.default {
    constructor(message) {
        super(NotFoundException.status, message || 'Not found');
    }
}
NotFoundException.status = 404;
exports.default = NotFoundException;
