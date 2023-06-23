"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_client_1 = __importDefault(require("./prisma.client"));
class PostModel {
    constructor() {
        this.connection = prisma_client_1.default;
    }
    getAll(order) {
        const posts = this.connection.post.findMany({
            orderBy: { updated: order === 'desc' ? 'desc' : 'asc' },
        });
        return posts;
    }
    getById(id) {
        return this.connection.post.findUnique({ where: { id: parseInt(id, 10) } });
    }
    getByAuthorId(authorId, order) {
        const posts = this.connection.post.findMany({
            where: { authorId: parseInt(authorId, 10) },
            orderBy: { updated: order === 'desc' ? 'desc' : 'asc' },
        });
        return posts;
    }
    async create(post) {
        const { title, content, authorId } = post;
        const newPost = await this.connection.post.create({
            data: {
                title,
                content,
                authorId,
            },
        });
        return newPost;
    }
    update(post) {
        const updatedPost = this.connection.post.update({
            where: { id: post.id },
            data: {
                title: post.title,
                content: post.content,
                updated: new Date(),
            },
        });
        return updatedPost;
    }
    async removeById(id) {
        try {
            await this.connection.post.delete({ where: { id: parseInt(id, 10) } });
            return true;
        }
        catch (error) {
            console.error('Erro ao deletar o item:', error);
        }
        return false;
    }
}
exports.default = PostModel;
