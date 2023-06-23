"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostValidate_1 = __importDefault(require("./validations/PostValidate"));
class PostService {
    constructor(model) {
        this.model = model;
    }
    async getAll(filterByAuthor, authorId, order) {
        if (filterByAuthor && typeof this.model.getByAuthorId === 'function') {
            const posts = await this.model.getByAuthorId(authorId, order);
            return posts;
        }
        const posts = await this.model.getAll(order);
        return posts;
    }
    async getById(id) {
        const post = await this.model.getById(id);
        PostValidate_1.default.existPost(post);
        return post;
    }
    async create(post) {
        PostValidate_1.default.validateNewPost(post);
        const newPost = await this.model.create(post);
        return newPost;
    }
    async update(post) {
        const dataBasePost = await this.getById(post.id.toString());
        PostValidate_1.default.validateUpdatePost(post, dataBasePost);
        const updatedPost = await this.model.update(post);
        return updatedPost;
    }
    async removeById(postId, userId) {
        const post = await this.getById(postId);
        PostValidate_1.default.validateDeletePost(userId, post?.authorId);
        const deletedPost = await this.model.removeById(postId);
        return deletedPost;
    }
}
exports.default = PostService;
