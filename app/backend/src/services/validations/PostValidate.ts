import BadRequestException from '../../exceptions/BadRequest';
import { INewPost } from '../../interfaces/IPost';

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

  static validateNewPost(post: INewPost): void {
    PostValidate.validateTitle(post.title);
    PostValidate.validateContent(post.content);
    PostValidate.validateAuthorId(post.authorId);
  }
}
