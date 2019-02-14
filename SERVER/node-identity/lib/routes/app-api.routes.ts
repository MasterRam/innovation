import { attachControllers } from '@decorators/express';
import { Application, Request, Response, Router } from 'express';
import { AuthController } from '../modules/auth0/authorize.controller';

export class Routes {
  public routes(app: Application): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successfulll!!!!'
      });
    });
    const apiRouter = Router({
      caseSensitive: true
    });
    attachControllers(apiRouter, [AuthController]);
    app.use('/connect', apiRouter);
  }
}
