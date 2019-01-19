import { Schema } from "mongoose";


export const PostSchema = new Schema({
    title: {
        type: String,
        required: "Enter a Post Title"
    },
    layout: {
        type: String,
        required: "Enter a last name"
    },
    resource: {
        type: String
    },
    action: {
        type: String
    },
    enable_validation: {
        type: Number
    },
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});
