import BadRequestException from '../../exceptions/BadRequest';
import ForbiddenException from '../../exceptions/Forbidden';
import NotFoundException from '../../exceptions/NotFound';
import { INewPost, IPost } from '../../interfaces';

export default class PostValidate {
  private static validateTitle(title: string): void {
    if (typeof title !== 'string') {
      throw new BadRequestException('Title is required');
    }
    if (title.length < 5) {
      throw new BadRequestException('Title must be at least 5 characters long');
    }
  }

  private static validateContent(content: string): void {
    if (typeof content !== 'string') {
      throw new BadRequestException('Content is required');
    }
    if (content.length < 30) {
      throw new BadRequestException(
        'Content must be at least 30 characters long'
      );
    }
  }

  private static validateAuthorId(authorId: number): void {
    if (typeof authorId !== 'number') {
      throw new BadRequestException(
        'Author ID is required and must be a number'
      );
    }
  }

  private static validateCreator(author: number, dataBaseAuthor = -1): void {
    if (author !== dataBaseAuthor) {
      throw new ForbiddenException('You are not the creator of this post');
    }
  }

  private static validateId(id: number): void {
    if (typeof id !== 'number') {
      throw new BadRequestException('ID is required and must be a number');
    }
  }

  static existPost(post: IPost | null): void {
    if (!post) {
      throw new NotFoundException('Post does not exist');
    }
  }

  static validateNewPost(post: INewPost): void {
    PostValidate.validateTitle(post.title);
    PostValidate.validateContent(post.content);
    PostValidate.validateAuthorId(post.authorId);
  }

  static validateUpdatePost(post: IPost, dataBasePost: IPost | null): void {
    PostValidate.existPost(dataBasePost);
    PostValidate.validateNewPost(post);
    PostValidate.validateId(post.id);
    PostValidate.validateCreator(post.authorId, dataBasePost?.authorId);
  }
}
