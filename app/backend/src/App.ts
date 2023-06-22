import express, { Request, Response } from 'express';
import userRouter from './router/user.router';
import postRouter from './router/post.router';
import errorMiddleware from './middlewares/errorMiddleware';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.routes();

    this.app.get('/', (req: Request, res: Response) => res.json({ ok: true }));
    this.app.use(errorMiddleware);
  }

  private routes(): void {
    this.app.use('/register', userRouter);
    this.app.use('/posts', postRouter);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
