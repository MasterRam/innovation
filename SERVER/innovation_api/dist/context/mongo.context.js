"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const pageSchema_model_1 = require("../modules/page/pageSchema.model");
class Schema {
    getPage() {
        return;
    }
    getForm() {
        return mongoose_1.model('Form', pageSchema_model_1.PageSchema);
    }
}
exports.Schema = Schema;
exports.MongoSchame = new Schema();
class MongoContext {
    constructor() {
    }
}
exports.MongoContext = MongoContext;
//# sourceMappingURL=mongo.context.js.map