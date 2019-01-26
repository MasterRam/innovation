import { Injectable } from '@decorators/di';
import { Body, Controller, Get, Params, Post, Response } from '@decorators/express';
import { PostDocument } from '../models/documents';
import { BlogPost } from '../models/postSchema.model';

@Controller('/api/blog')
@Injectable()
export class PostController {
  constructor() { }

  @Get('/:id')
  getData(@Response() res, @Params('id') id: string) {
    const post = new BlogPost();
    post.title = id;
    const newContact = new PostDocument(post);
    res.send(newContact);
  }
  @Post('/:id')
  postData(@Response() res, @Params('id') id: string, @Body() data: BlogPost) {
    data.title = id;
    const newContact = new PostDocument(data);
    res.send(newContact);
  }
}
