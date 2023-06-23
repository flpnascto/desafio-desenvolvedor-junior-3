import { Router } from 'express';
import PostController from '../controllers/post.controller';
import PostService from '../services/post.service';
import PostModel from '../models/post.model';
import AuthMiddleware from '../middlewares/authMiddleware';

const postModel = new PostModel();
const postService = new PostService(postModel);
const postController = new PostController(postService);
const auth = new AuthMiddleware();

const postRouter = Router();

postRouter.get('/:id', auth.register, (req, res, next) =>
  postController.getById(req, res, next)
);
postRouter.get('/', auth.register, (req, res) =>
  postController.getAll(req, res)
);
postRouter.post('/', auth.register, (req, res, next) =>
  postController.create(req, res, next)
);
postRouter.put('/:id', auth.register, (req, res, next) =>
  postController.update(req, res, next)
);
postRouter.delete('/:id', auth.register, (req, res, next) =>
  postController.removeById(req, res, next)
);

export default postRouter;
