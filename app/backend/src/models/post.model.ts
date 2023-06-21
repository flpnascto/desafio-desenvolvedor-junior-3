import { INewPost, IPost } from '../interfaces/IPost';
import { IModel } from './interfaces/IModel';
import prisma from './prisma.client';

class PostModel implements IModel<IPost> {
  private connection = prisma;

  getAll(): Promise<IPost[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<IPost | null> {
    return this.connection.post.findUnique({ where: { id: parseInt(id, 10) } });
  }

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

  async removeById(id: string): Promise<boolean> {
    try {
      await this.connection.post.delete({ where: { id: parseInt(id, 10) } });
      return true;
    } catch (error) {
      console.error('Erro ao deletar o item:', error);
    }
    return false;
  }
}

export default PostModel;
