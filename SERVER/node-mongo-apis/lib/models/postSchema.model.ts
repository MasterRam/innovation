import { Schema } from "mongoose";

export const TagSchema = new Schema({
  display: {
    type: String
  },
  value: {
    type: String
  }
});

export const PostSchema = new Schema({
  title: {
    type: String,
    required: "Give a Title"
  },
  tags: [TagSchema],
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

export class BlogPost {
  title: string;
  tags: string[];
  content: string;
  created_date: Date;
  updated_date: Date;
}
