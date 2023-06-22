import HttpException from './HttpException';

export default class ForbiddenException extends HttpException {
  private static status = 403;

  constructor(message?: string) {
    super(ForbiddenException.status, message || 'Not found');
  }
}
