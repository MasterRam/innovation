"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@decorators/di");
const express_1 = require("@decorators/express");
const postSchema_model_1 = require("../models/postSchema.model");
const blog_repository_1 = require("../repository/blog.repository");
let PostController = class PostController {
    constructor(service = new blog_repository_1.BlogRepository()) {
        this.service = service;
    }
    getData(res, name) {
        const post = new postSchema_model_1.BlogPost();
        post.title = name;
        this.service.findBy({ title: name }, (success, response) => {
            res.send(response);
        });
    }
    postData(res, id, data) {
        data.title = id;
        this.service.Add({ title: id }, data, (success, response) => {
            res.send(response);
        });
    }
};
__decorate([
    express_1.Get('/get'),
    __param(0, express_1.Response()), __param(1, express_1.Query('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getData", null);
__decorate([
    express_1.Post('/:id'),
    __param(0, express_1.Response()), __param(1, express_1.Params('id')), __param(2, express_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, postSchema_model_1.BlogPost]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "postData", null);
PostController = __decorate([
    express_1.Controller('/api/blog'),
    di_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map