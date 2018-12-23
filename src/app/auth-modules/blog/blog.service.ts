import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { BlogModel } from './models/blog.model';
import { IDataLoadURL } from 'src/app/api.util';

@Injectable()
export class BlogService {

    constructor(private api: ApiService) { }

    public GetBlogSample(name: string) {
        return this.api.request<BlogModel>({ urlObj: { url: `${name}.json`, hostName: 'blog-json' } as IDataLoadURL });
    }
}
