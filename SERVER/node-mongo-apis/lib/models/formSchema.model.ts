import { Schema } from 'mongoose';

export class Form {
    title: string;
    layout: string;
    validation: boolean;
    properties: Property[];
    created_date: Date;
    updated_date: Date;
}

export class Property {
    name: string;
    type: string;
    options: string[];
    value: string;
    placeholder: string;
    required: boolean;
    label: string;
}

export const PropertySchema = new Schema({
    name: {
        type: String,
        required: 'Give a property name'
    },
    type: {
        type: String,
        required: 'Give a property type'
    },
    placeholder: {
        type: String,
    },
    label: {
        type: String,
    },
    required: {
        type: Boolean,
    },
    options: {
        type: [String],
        default: []
    },
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

export const FormSchema = new Schema({
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
    properties: [PropertySchema],
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});
