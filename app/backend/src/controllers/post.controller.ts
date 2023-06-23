import { NextFunction, Request, Response } from 'express';
import PostService from '../services/post.service';

class PostController {
  constructor(private service: PostService) {}

  async getAll(req: Request, res: Response): Promise<Response | void> {
    const { order, author } = req.query;
    const filterByAuthor = author === 'true' ? true : false;
    const authorId = req.body.auth.id as string;
    const posts = await this.service.getAll(
      filterByAuthor,
      authorId,
      order as string
    );
    return res.status(200).json(posts);
  }

  async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { id } = req.params;
    try {
      const post = await this.service.getById(id);
      return res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  }

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { title, content } = req.body;
    const userId = req.body.auth.id as number;
    try {
      const post = await this.service.create({
        title,
        content,
        authorId: userId,
      });
      return res.status(201).json(post);
    } catch (error) {
      next(error);
    }
  }

  async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { title, content } = req.body;
    const { id } = req.params;
    const userId = req.body.auth.id as number;
    try {
      const post = await this.service.update({
        id: parseInt(id),
        title,
        content,
        authorId: userId,
      });
      return res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  }

  async removeById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { id } = req.params;
    const userId = req.body.auth.id as number;
    try {
      await this.service.removeById(id, userId);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

export default PostController;
