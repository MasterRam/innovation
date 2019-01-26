import * as bodyParser from 'body-parser';
import * as express from 'express';
import { connect } from 'mongoose';
import { Routes } from './routes/app.routes';

class App {
    public mongoUrl = 'mongodb://localhost:27017/Innovation';
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        connect(this.mongoUrl, { useNewUrlParser: true });
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;
