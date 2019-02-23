"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const formSchema_model_1 = require("../modules/form/formSchema.model");
const pageSchema_model_1 = require("../modules/page/pageSchema.model");
const blogSchema_model_1 = require("../modules/post/blogSchema.model");
exports.PageDocument = mongoose_1.model('Page', pageSchema_model_1.PageSchema);
exports.FormDocument = mongoose_1.model('Form', formSchema_model_1.FormSchema);
exports.BlogDocument = mongoose_1.model('Blog', blogSchema_model_1.BlogSchema);
//# sourceMappingURL=documents.js.map