import { INewPost, IPost } from '../interfaces/IPost';
import { IModelWriter } from './interfaces/IModel';
import prisma from './prisma.client';

class PostModel implements IModelWriter<INewPost> {
  private connection = prisma;

  async create(post: INewPost): Promise<IPost> {
    const { title, content, authorId } = post;
    const newPost = await this.connection.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });

    return newPost;
  }

  update(post: IPost): Promise<IPost> {
    const updatedPost = this.connection.post.update({
      where: { id: post.id },
      data: {
        title: post.title,
        content: post.content,
        updated: new Date(),
      },
    });

    return updatedPost;
  }
}

export default PostModel;
