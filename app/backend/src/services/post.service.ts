import { INewPost, IPost } from '../interfaces/IPost';
import { IModelWriter } from '../models/interfaces/IModel';

class PostService {
  constructor(private model: IModelWriter<IPost>) {}

  async create(post: INewPost): Promise<IPost> {
    const newPost = await this.model.create(post);

    return newPost;
  }

  async update(post: IPost): Promise<IPost> {
    const updatedPost = await this.model.update(post);

    return updatedPost;
  }
}

export default PostService;
