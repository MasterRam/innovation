import { model } from 'mongoose';
import { PageSchema } from '../models/pageSchema.model';

export class Schema {

    public getPage() {
        return;
    }

    public getForm() {
        return model('Form', PageSchema);
    }

}

export const MongoSchame = new Schema();

export class MongoContext {
    constructor() {

    }

}
