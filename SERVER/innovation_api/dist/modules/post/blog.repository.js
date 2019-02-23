"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const documents_1 = require("../../models/documents");
class BlogRepository {
    constructor() { }
    findBy(findQuery, callback) {
        documents_1.BlogDocument.findOne(findQuery, (err, data) => {
            if (err) {
                callback(false, err);
            }
            callback(true, data);
        });
    }
    findAll(callback) {
        documents_1.BlogDocument.find((err, data) => {
            if (err) {
                callback(false, err);
            }
            callback(true, data);
        });
    }
    Add(id, data, callback) {
        const document = new documents_1.BlogDocument(data);
        let error;
        if ((error = document.validateSync()) === undefined) {
            documents_1.BlogDocument.update({ _id: id }, document, { upsert: true }, (err, updatedData) => {
                if (err) {
                    callback(false, err);
                }
                else {
                    callback(true, updatedData);
                }
            });
        }
        else {
            callback(false, error.errors);
        }
    }
}
exports.BlogRepository = BlogRepository;
//# sourceMappingURL=blog.repository.js.map