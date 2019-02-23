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
exports.PostSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: "Give a Title"
    },
    tags: [exports.TagSchema],
    content: {
        type: String,
        required: "Give a Title"
    },
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});
class BlogPost {
}
exports.BlogPost = BlogPost;
//# sourceMappingURL=postSchema.model.js.map