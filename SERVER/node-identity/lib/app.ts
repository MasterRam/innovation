import * as bodyParser from 'body-parser';
import cors = require('cors');
import * as express from 'express';
import { connect } from 'mongoose';
import morgan = require('morgan');
import { CorsOptionsLocal } from './CORSHandler';
import { Routes } from './routes/app.routes';
class App {
  public mongoUrl = 'mongodb://localhost:27017/IdentityServer';
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    connect(
      this.mongoUrl,
      { useNewUrlParser: true }
    );
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors(CorsOptionsLocal));
  }
}

export default new App().app;
