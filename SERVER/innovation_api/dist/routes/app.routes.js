"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("@decorators/express");
const form_controller_1 = require("../modules/form/form.controller");
const page_controller_1 = require("../modules/page/page.controller");
const blog_controller_1 = require("../modules/post/blog.controller");
class Routes {
    routes(app) {
        app.route('/').get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        express_1.attachControllers(app, [page_controller_1.PageController, blog_controller_1.BlogController, form_controller_1.FormController]);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=app.routes.js.map