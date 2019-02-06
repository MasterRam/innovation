import { Injectable } from '@decorators/di';
import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Response,
  Request,
  Query
} from '@decorators/express';
import { PostDocument } from '../models/documents';
import { BlogPost } from '../models/postSchema.model';
import { BlogRepository } from '../repository/blog.repository';

@Controller('/api/blog')
@Injectable()
export class PostController {
  constructor(private service = new BlogRepository()) {}

  @Get('/get')
  getData(@Response() res, @Query('name') name: string) {
    const post = new BlogPost();
    post.title = name;
    this.service.findBy({ title: name }, (success, response) => {
      res.send(response);
    });
  }

  @Post('/:id')
  postData(@Response() res, @Params('id') id: string, @Body() data: BlogPost) {
    data.title = id;
    this.service.Add({ title: id }, data, (success, response) => {
      res.send(response);
    });
  }
}
