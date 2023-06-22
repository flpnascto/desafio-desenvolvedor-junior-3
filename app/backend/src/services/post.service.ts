import { INewPost, IPost } from '../interfaces/IPost';
import { IModel } from '../models/interfaces/IModel';
import PostValidate from './validations/PostValidate';

class PostService {
  constructor(private model: IModel<IPost>) {}

  async getAll(
    filterByAuthor: boolean,
    authorId: string,
    order?: string
  ): Promise<IPost[] | null> {
    if (filterByAuthor && typeof this.model.getByAuthorId === 'function') {
      const posts = await this.model.getByAuthorId(authorId, order);
      return posts;
    }

    const posts = await this.model.getAll(order);
    return posts;
  }

  async getById(id: string): Promise<IPost | null> {
    const post = await this.model.getById(id);
    PostValidate.existPost(post);
    return post;
  }

  async create(post: INewPost): Promise<IPost> {
    PostValidate.validateNewPost(post);
    const newPost = await this.model.create(post);

    return newPost;
  }

  async update(post: IPost): Promise<IPost> {
    const dataBasePost = await this.getById(post.id.toString());
    PostValidate.validateUpdatePost(post, dataBasePost);
    const updatedPost = await this.model.update(post);

    return updatedPost;
  }

  async removeById(id: string): Promise<boolean> {
    const deletedPost = await this.model.removeById(id);

    return deletedPost;
  }
}

export default PostService;
