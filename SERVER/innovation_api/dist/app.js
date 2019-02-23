"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const mongoose_1 = require("mongoose");
const app_routes_1 = require("./routes/app.routes");
const cors = require("cors");
const CORSHandler_1 = require("./CORSHandler");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost:27017/Innovation';
        this.routePrv = new app_routes_1.Routes();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        mongoose_1.connect(this.mongoUrl, { useNewUrlParser: true });
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors(CORSHandler_1.CorsOptionsLocal));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map