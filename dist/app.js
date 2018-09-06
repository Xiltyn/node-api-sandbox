"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crmRoutes_1 = require("./routes/crmRoutes");
class App {
    constructor() {
        this.routePrv = new crmRoutes_1.Routes();
        this.mongoUrl = 'mongodb://kagamiAdmin:kagami4dmin@ds243212.mlab.com:43212/contacts_sandbox';
        this.mongoSetup = () => {
            mongoose.Promise = global.Promise;
            mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
        };
        this.config = () => {
            // support application/json type post data
            this.app.use(bodyParser.json());
            //support application/x-www-form-urlencoded post data
            this.app.use(bodyParser.urlencoded({ extended: false }));
        };
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map