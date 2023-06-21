import { INewPost, IPost } from '../interfaces/IPost';
import { IModelWriter } from '../models/interfaces/IModel';

class PostService {
  constructor(private model: IModelWriter<IPost>) {}

  async create(post: INewPost): Promise<IPost> {
    const newPost = await this.model.create(post);

    return newPost;
  }
}

export default PostService;
