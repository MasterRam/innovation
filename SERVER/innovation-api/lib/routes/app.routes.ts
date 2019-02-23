import { attachControllers } from '@decorators/express';
import { Request, Response, Application } from 'express';
import { FormController } from '../modules/form/form.controller';
import { PageController } from '../modules/page/page.controller';
import { BlogController } from '../modules/post/blog.controller';

export class Routes {
  public routes(app: Application): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successfulll!!!!'
      });
    });
    
    attachControllers(app, [PageController, BlogController, FormController]);
  }
}
