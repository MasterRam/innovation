import { Schema } from "mongoose";

export class Page {
  title: string;
  description: string;
  content: string;
  created_date: Date;
  updated_date: Date;
}

export const PageSchema = new Schema({
  title: {
    type: String,
    required: "Enter a Page Title"
  },
  description: {
    type: String,
  },
  content: {
    type: String,
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
