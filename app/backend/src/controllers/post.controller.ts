import { Request, Response } from 'express';
import PostService from '../services/post.service';

class PostController {
  constructor(private service: PostService) {}

  async getById(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    const post = await this.service.getById(id);
    return res.status(200).json(post);
  }

  async create(req: Request, res: Response): Promise<Response | void> {
    const { title, content } = req.body;
    const userId = req.headers.id as string;
    const post = await this.service.create({
      title,
      content,
      authorId: parseInt(userId),
    });
    return res.status(201).json(post);
  }

  async update(req: Request, res: Response): Promise<Response | void> {
    const { title, content } = req.body;
    const { id } = req.params;
    const userId = req.headers.id as string;
    const post = await this.service.update({
      id: parseInt(id),
      title,
      content,
      authorId: parseInt(userId),
    });
    return res.status(200).json(post);
  }

  async removeById(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    await this.service.removeById(id);
    return res.status(204).end();
  }
}

export default PostController;
