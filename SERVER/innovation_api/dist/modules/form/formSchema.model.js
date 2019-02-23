"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Form {
}
exports.Form = Form;
class Property {
}
exports.Property = Property;
exports.PropertySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: 'Give a property name'
    },
    type: {
        type: String,
        required: 'Give a property type'
    },
    placeholder: {
        type: String
    },
    label: {
        type: String
    },
    required: {
        type: Boolean
    },
    options: {
        type: [String],
        default: []
    },
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});
exports.FormSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: 'Give a Title'
    },
    layout: {
        type: String,
        default: 'column1',
        enum: ['column1', 'column2', 'column3']
    },
    validation: {
        type: Boolean,
        default: false
    },
    properties: [exports.PropertySchema],
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=formSchema.model.js.map