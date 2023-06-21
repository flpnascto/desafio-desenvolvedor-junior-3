import { INewPost, IPost } from '../interfaces/IPost';
import { IModelWriter } from './interfaces/IModel';
import prisma from './prisma.client';

class PostModel implements IModelWriter<INewPost> {
  update(_arg: IPost): Promise<IPost> {
    throw new Error('Method not implemented.');
  }
  private connection = prisma;

  async create(post: INewPost): Promise<IPost> {
    const newPost = await this.connection.post.create({
      data: post,
    });

    return newPost;
  }
}

export default PostModel;
