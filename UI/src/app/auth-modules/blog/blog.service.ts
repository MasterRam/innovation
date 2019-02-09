import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IDataLoadURL } from 'src/app/api.util';
import { BlogApi } from './blog.api';
import { BlogModel } from './models/blog.model';

@Injectable()
export class BlogService {

    constructor(private api: ApiService) { }

    public GetBlogSample(name: string) {
        return this.api.request<BlogModel>({
            urlObj: {
                url: `${name}.json`,
                hostName: 'blog-json'
            } as IDataLoadURL
        });
    }
    public GetAllblogs() {
        const api = BlogApi.BlogsGET;
        return this.api.request<BlogModel[]>({ urlObj: api });
    }
    getBlog(blogName: string) {
        const get = BlogApi.BlogGET;
        // get.url = `${BlogBuilderApi.BlogGET.url}/${blogName}`;
        return this.api.request<BlogModel>({
            urlObj: get,
            queryParam: { name: blogName }
        });
    }
}
