import { attachControllers } from '@decorators/express';
import { Request, Response } from 'express';
import { FormController } from '../controllers/form.controller';
import { PageController } from '../controllers/page.controller';
import { PostController } from '../controllers/post.controller';

export class Routes {
  public routes(app): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successfulll!!!!'
      });
    });
    attachControllers(app, [PageController, PostController, FormController]);
  }
}
