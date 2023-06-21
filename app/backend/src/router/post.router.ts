import { Router } from 'express';
import PostController from '../controllers/post.controller';
import PostService from '../services/post.service';
import PostModel from '../models/post.model';

const postModel = new PostModel();
const postService = new PostService(postModel);
const postController = new PostController(postService);

const postRouter = Router();

postRouter.get('/:id', (req, res) => postController.getById(req, res));
postRouter.post('/', (req, res) => postController.create(req, res));
postRouter.put('/:id', (req, res) => postController.update(req, res));
postRouter.delete('/:id', (req, res) => postController.removeById(req, res));

export default postRouter;
