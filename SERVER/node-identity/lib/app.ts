import * as bodyParser from 'body-parser';
import cookieParser = require('cookie-parser');
import cors = require('cors');
import * as express from 'express';
import * as express_layout from 'express-ejs-layouts';
import { connect } from 'mongoose';
import morgan = require('morgan');
import path = require('path');
import { CorsOptionsLocal } from './CORSHandler';
import { Routes } from './routes/app.routes';
class App {
  public mongoUrl = 'mongodb://localhost:27017/NodeIdentity';
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
    // view engine setup
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.use(express.static(__dirname + '/public'));
    this.app.set('view engine', 'ejs');
    this.app.use(express_layout);
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(cors(CorsOptionsLocal));
  }
}

export default new App().app;
