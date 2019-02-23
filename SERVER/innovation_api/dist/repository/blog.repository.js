"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const documents_1 = require("../models/documents");
class BlogRepository {
    constructor() { }
    findBy(findQuery, callback) {
        documents_1.PostDocument.findOne(findQuery, (err, data) => {
            if (err) {
                callback(false, err);
            }
            callback(true, data);
        });
    }
    Add(findQuery, data, callback) {
        const document = new documents_1.PostDocument(data);
        let error;
        if ((error = document.validateSync()) === undefined) {
            documents_1.PostDocument.create(data, (updatedData) => {
                callback(true, updatedData);
            }, (err) => {
                if (err) {
                    callback(false, err);
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