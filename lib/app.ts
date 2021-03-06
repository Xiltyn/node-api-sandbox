import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import { Routes } from "./routes/crmRoutes";

class App {

	public app: express.Application;
	public routePrv: Routes = new Routes();
	public mongoUrl: string = 'mongodb://kagamiAdmin:kagami4dmin@ds243212.mlab.com:43212/contacts_sandbox';

	constructor() {
		this.app = express();
		this.config();
		this.routePrv.routes(this.app);
		this.mongoSetup();
	}

	private mongoSetup = (): void => {
		mongoose.Promise = global.Promise;
		mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
	};

	private config = (): void => {
		// support application/json type post data
		this.app.use(bodyParser.json());
		//support application/x-www-form-urlencoded post data
		this.app.use(bodyParser.urlencoded({ extended: false }));
	}

}

export default new App().app;