import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { BlogBuilderApi } from './blog-builder.api';
import { BlogModel } from './blog.model';

@Injectable()
export class BlogBuilderService {
  constructor(private api: ApiService) {}

  getBlog(blogName: string) {
    const get = BlogBuilderApi.BlogGET;
    // get.url = `${BlogBuilderApi.BlogGET.url}/${blogName}`;
    return this.api.request<BlogModel>({
      urlObj: get,
      queryParam: { name: blogName }
    });
  }
  postBlog(id: string, blog: any) {
    const post = Object.assign({}, BlogBuilderApi.BlogPOST);
    return this.api.request<BlogModel>({
      urlObj: post,
      queryParam: {id},
      body: blog
    });
  }
}
