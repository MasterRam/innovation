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
const documents_1 = require("../../models/documents");
const formSchema_model_1 = require("./formSchema.model");
let FormController = class FormController {
    constructor() { }
    getData(res, id) {
        const form = new formSchema_model_1.Form();
        form.title = id;
        const newContact = new documents_1.FormDocument(form);
        res.send(newContact);
    }
    postData(res, id, data) {
        data.title = id;
        const newContact = new documents_1.FormDocument(data);
        res.send(newContact);
    }
};
__decorate([
    express_1.Get('/:id'),
    __param(0, express_1.Response()), __param(1, express_1.Params('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], FormController.prototype, "getData", null);
__decorate([
    express_1.Post('/:id'),
    __param(0, express_1.Response()), __param(1, express_1.Params('id')), __param(2, express_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, formSchema_model_1.Form]),
    __metadata("design:returntype", void 0)
], FormController.prototype, "postData", null);
FormController = __decorate([
    express_1.Controller('/api/form'),
    di_1.Injectable(),
    __metadata("design:paramtypes", [])
], FormController);
exports.FormController = FormController;
//# sourceMappingURL=form.controller.js.map