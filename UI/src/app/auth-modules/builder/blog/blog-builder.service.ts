import { Injectable } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { BlogModel } from "./blog.model";
import { BlogBuilderApi } from "./blog-builder.api";

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
  postBlog(blogName: string, blog: any) {
    const post = Object.assign({}, BlogBuilderApi.BlogPOST);
    post.url = `${BlogBuilderApi.BlogPOST.url}/${blogName}`;
    return this.api.request<BlogModel>({
      urlObj: post,
      body: blog
    });
  }
}
