import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/crm';
import * as mongoose from 'mongoose';

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  public mongoUrl: string = 'mongodb://localhost/CRMdb';
  public constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }
  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
  private mongoSetup(): void {
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', (): void => {
      console.log('connected to database');
    });
  }
}

export default new App().app;
