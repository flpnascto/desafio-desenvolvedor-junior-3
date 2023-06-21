import { INewPost, IPost } from '../interfaces/IPost';
import { IModel } from '../models/interfaces/IModel';

class PostService {
  constructor(private model: IModel<IPost>) {}

  async getById(id: string): Promise<IPost | null> {
    return this.model.getById(id);
  }

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
