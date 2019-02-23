"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.TagSchema = new mongoose_1.Schema({
    display: {
        type: String
    },
    value: {
        type: String
    }
});
exports.BlogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: 'Give a Title'
    },
    tags: [exports.TagSchema],
    content: {
        type: String,
        required: 'Give a Title'
    },
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date,
        default: Date.now
    },
    normalized_title: {
        type: String,
        required: 'Give a Normalized title'
    }
});
class BlogModel {
    constructor() {
    }
}
exports.BlogModel = BlogModel;
class TagModel {
}
exports.TagModel = TagModel;
//# sourceMappingURL=blogSchema.model.js.map