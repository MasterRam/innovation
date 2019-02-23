"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const documents_1 = require("../../models/documents");
class PageRepository {
    constructor() { }
    findBy(findQuery, callback) {
        documents_1.PageDocument.find(findQuery, (err, data) => {
            if (err) {
                callback(false, err);
            }
            callback(true, data);
        });
    }
    Add(findQuery, data, callback) {
        const document = new documents_1.PageDocument(data);
        let error;
        if ((error = document.validateSync()) === undefined) {
            documents_1.PageDocument.findOneAndUpdate(findQuery, data, { new: true }, (err, updatedData) => {
                if (err) {
                    callback(false, err);
                }
                callback(true, updatedData);
            });
        }
        else {
            callback(false, error.errors);
        }
    }
}
exports.PageRepository = PageRepository;
//# sourceMappingURL=page.repository.js.map