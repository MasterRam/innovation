export class BlogModel {
    constructor() {

    }
    author: string;
    title: string;
    created_at: Date;
    last_update_at: Date;
    tags: string[];
    content: string;
    description: string;
    no_content: boolean;
}
