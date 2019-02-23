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
const documents_1 = require("../models/documents");
const pageSchema_model_1 = require("../models/pageSchema.model");
const page_repository_1 = require("../repository/page.repository");
let PageController = class PageController {
    constructor(service = new page_repository_1.PageRepository()) {
        this.service = service;
    }
    getData(res, id) {
        const page = new pageSchema_model_1.Page();
        page.title = id;
        const newContact = new documents_1.PageDocument(page);
        res.send(newContact);
    }
    postData(res, id, data) {
        this.service.Add({ title: id }, data, (success, response) => {
            res.send(response);
        });
    }
};
__decorate([
    express_1.Get('/:id'),
    __param(0, express_1.Response()), __param(1, express_1.Params('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PageController.prototype, "getData", null);
__decorate([
    express_1.Post('/:id'),
    __param(0, express_1.Response()), __param(1, express_1.Params('id')), __param(2, express_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, pageSchema_model_1.Page]),
    __metadata("design:returntype", void 0)
], PageController.prototype, "postData", null);
PageController = __decorate([
    express_1.Controller('/api/page'),
    di_1.Injectable(),
    __metadata("design:paramtypes", [page_repository_1.PageRepository])
], PageController);
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map