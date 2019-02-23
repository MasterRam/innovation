"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Page {
}
exports.Page = Page;
exports.PageSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: 'Give a Title'
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=pageSchema.model.js.map