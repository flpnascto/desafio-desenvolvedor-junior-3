import { Router } from 'express';
import PostController from '../controllers/post.controller';
import PostService from '../services/post.service';
import PostModel from '../models/post.model';

const postModel = new PostModel();
const postService = new PostService(postModel);
const postController = new PostController(postService);

const postRouter = Router();

postRouter.get('/:id', (req, res, next) =>
  postController.getById(req, res, next)
);
postRouter.get('/', (req, res) => postController.getAll(req, res));
postRouter.post('/', (req, res, next) => postController.create(req, res, next));
postRouter.put('/:id', (req, res, next) =>
  postController.update(req, res, next)
);
postRouter.delete('/:id', (req, res) => postController.removeById(req, res));

export default postRouter;
