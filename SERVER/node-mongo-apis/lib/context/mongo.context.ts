import { PageSchema } from "../models/pageSchema.model";
import { model } from "mongoose";

export class Schema {

    public getPage() {
        return model("Page", PageSchema);
    }

    public getForm() {
        return model("Form", PageSchema);
    }

}

export const MongoSchame = new Schema();

export class MongoContext {
    constructor() {

    }

}