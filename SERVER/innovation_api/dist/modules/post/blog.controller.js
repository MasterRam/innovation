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
const blogSchema_model_1 = require("./blogSchema.model");
const blog_repository_1 = require("./blog.repository");
const bson_1 = require("bson");
let BlogController = class BlogController {
    constructor(service = new blog_repository_1.BlogRepository()) {
        this.service = service;
    }
    getData(res, name) {
        this.service.findBy({ normalized_title: name.toLowerCase() }, (success, response) => {
            res.send(response);
        });
    }
    getAll(res) {
        this.service.findAll((success, response) => {
            res.send(response);
        });
    }
    postData(res, id, data) {
        if (id === undefined || id === 'undefined' || id === 'null' || id === null)
            id = new bson_1.ObjectId();
        data._id = id;
        data.normalized_title = data.title.replace(/ /g, '_').toLowerCase();
        this.service.Add(id, data, (success, response) => {
            response.data = data.normalized_title;
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
], BlogController.prototype, "getData", null);
__decorate([
    express_1.Get('/all'),
    __param(0, express_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getAll", null);
__decorate([
    express_1.Post('/post'),
    __param(0, express_1.Response()), __param(1, express_1.Query('id')), __param(2, express_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, blogSchema_model_1.BlogModel]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "postData", null);
BlogController = __decorate([
    express_1.Controller('/api/blog'),
    di_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], BlogController);
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map