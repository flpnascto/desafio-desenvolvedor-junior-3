"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostController {
    constructor(service) {
        this.service = service;
    }
    async getAll(req, res) {
        const { order, author } = req.query;
        const filterByAuthor = author === 'true' ? true : false;
        const authorId = req.body.auth.id;
        const posts = await this.service.getAll(filterByAuthor, authorId, order);
        return res.status(200).json(posts);
    }
    async getById(req, res, next) {
        const { id } = req.params;
        try {
            const post = await this.service.getById(id);
            return res.status(200).json(post);
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        const { title, content } = req.body;
        const userId = req.body.auth.id;
        try {
            const post = await this.service.create({
                title,
                content,
                authorId: userId,
            });
            return res.status(201).json(post);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        const { title, content } = req.body;
        const { id } = req.params;
        const userId = req.body.auth.id;
        try {
            const post = await this.service.update({
                id: parseInt(id),
                title,
                content,
                authorId: userId,
            });
            return res.status(200).json(post);
        }
        catch (error) {
            next(error);
        }
    }
    async removeById(req, res, next) {
        const { id } = req.params;
        const userId = req.body.auth.id;
        try {
            await this.service.removeById(id, userId);
            return res.status(204).end();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = PostController;
