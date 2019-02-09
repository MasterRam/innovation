export class BlogModel {
    constructor() {
    }
    _id: string;
    content: string;
    tags: TagModel[];
    title: string;
    updated_date: Date;
    normalized_title: string;
}
export class TagModel {
    public display: string;
    public value: string;
}
