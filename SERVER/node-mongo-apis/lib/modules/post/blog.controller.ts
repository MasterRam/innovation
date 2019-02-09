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
import { BlogDocument } from '../../models/documents';
import { BlogModel } from './blogSchema.model';
import { BlogRepository } from './blog.repository';

@Controller('/api/blog')
@Injectable()
export class BlogController {
  constructor(private service = new BlogRepository()) { }

  @Get('/get')
  getData(@Response() res, @Query('name') name: string) {

    this.service.findBy({ normalized_title: name.toLowerCase() }, (success, response) => {
      res.send(response);
    });
  }
  @Get('/all')
  getAll(@Response() res) {
    this.service.findAll( (success, response) => {
      res.send(response);
    })
  }
  @Post('/post')
  postData(@Response() res, @Query('id') id: string, @Body() data: BlogModel) {
    if(id===undefined||id==='undefined')
    id=null;
    data._id = id;
    data.normalized_title = data.title.replace(/ /g, '_').toLowerCase();
    this.service.Add( id , data, (success, response) => {
      response.data = data.normalized_title
      res.send(response);
    });
  }
}
