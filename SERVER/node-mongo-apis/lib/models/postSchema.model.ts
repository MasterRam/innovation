import { Schema } from 'mongoose';


export const PostSchema = new Schema({
    title: {
        type: String,
        required: 'Give a Title'
    },
    tags: {
        type: [String]
    },
    content: String,
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

export class BlogPost {
    title: string;
    tags: string[];
    content: string;
    created_date: Date;
    updated_date: Date;
}
