"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BadRequest_1 = __importDefault(require("../../exceptions/BadRequest"));
const Unauthorized_1 = __importDefault(require("../../exceptions/Unauthorized"));
class UserValidate {
    static validateFirstName(firstName) {
        if (typeof firstName !== 'string') {
            throw new BadRequest_1.default('First name must be a string');
        }
        if (firstName.length < 2) {
            throw new BadRequest_1.default('First name must be at least 2 characters long');
        }
    }
    static validateLastName(lastName) {
        if (typeof lastName !== 'string') {
            throw new BadRequest_1.default('Last name must be a string');
        }
        if (lastName.length < 2) {
            throw new BadRequest_1.default('Last name must be at least 2 characters long');
        }
    }
    static validateEmail(email) {
        if (typeof email !== 'string') {
            throw new BadRequest_1.default('Email must be a string');
        }
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(email.toLowerCase())) {
            throw new BadRequest_1.default('Email is not valid');
        }
    }
    static validatePassword(password) {
        if (typeof password !== 'string') {
            throw new BadRequest_1.default('Password must be a string');
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            throw new BadRequest_1.default('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number');
        }
    }
    static validateEmailAndPassword(login, user) {
        if (!user) {
            throw new Unauthorized_1.default('Invalid user');
        }
        if (login.email !== user.email) {
            throw new Unauthorized_1.default('Invalid user');
        }
        if (login.password !== user.password) {
            throw new BadRequest_1.default('Invalid user');
        }
    }
    static validateNewUser(user) {
        UserValidate.validateFirstName(user.firstName);
        UserValidate.validateLastName(user.lastName);
        UserValidate.validateEmail(user.email);
        UserValidate.validatePassword(user.password);
    }
    static validateLogin(login, user) {
        UserValidate.validateEmail(login.email);
        UserValidate.validatePassword(login.password);
        UserValidate.validateEmailAndPassword(login, user);
    }
}
exports.default = UserValidate;
