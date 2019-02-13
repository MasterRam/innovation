import { Schema } from "mongoose";
import { ObjectID } from "mongodb";

export const TagSchema = new Schema({
  display: {
    type: String
  },
  value: {
    type: String
  }
});

export const UserSchema = new Schema({
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
  },
  normalized_title: {
    type: String,
    required: "Give a Normalized title"
  }
});

export class User {
  constructor() {}
  _id: any;
  content: string;
  tags: TagModel[];
  title: string;
  updated_date: Date;
  created_date: Date;
  normalized_title: string;
}
export class TagModel {
  public display: string;
  public value: string;
}
