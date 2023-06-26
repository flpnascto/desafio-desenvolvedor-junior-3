"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BadRequest_1 = __importDefault(require("../../exceptions/BadRequest"));
const Forbidden_1 = __importDefault(require("../../exceptions/Forbidden"));
const NotFound_1 = __importDefault(require("../../exceptions/NotFound"));
class PostValidate {
    static validateTitle(title) {
        if (typeof title !== 'string') {
            throw new BadRequest_1.default('Title is required');
        }
        if (title.length < 5) {
            throw new BadRequest_1.default('Title must be at least 5 characters long');
        }
    }
    static validateContent(content) {
        if (typeof content !== 'string') {
            throw new BadRequest_1.default('Content is required');
        }
        if (content.length < 30) {
            throw new BadRequest_1.default('Content must be at least 30 characters long');
        }
    }
    static validateAuthorId(authorId) {
        if (typeof authorId !== 'number') {
            throw new BadRequest_1.default('Author ID is required and must be a number');
        }
    }
    static validateCreator(author, dataBaseAuthor = -1) {
        if (author !== dataBaseAuthor) {
            throw new Forbidden_1.default('You are not the creator of this post');
        }
    }
    static validateId(id) {
        if (typeof id !== 'number') {
            throw new BadRequest_1.default('ID is required and must be a number');
        }
    }
    static existPost(post) {
        if (!post) {
            throw new NotFound_1.default('Post does not exist');
        }
    }
    static validateNewPost(post) {
        PostValidate.validateTitle(post.title);
        PostValidate.validateContent(post.content);
        PostValidate.validateAuthorId(post.authorId);
    }
    static validateUpdatePost(post, dataBasePost) {
        PostValidate.existPost(dataBasePost);
        PostValidate.validateNewPost(post);
        PostValidate.validateId(post.id);
        PostValidate.validateCreator(post.authorId, dataBasePost?.authorId);
    }
    static validateDeletePost(userId, id) {
        PostValidate.validateCreator(userId, id);
    }
}
exports.default = PostValidate;
