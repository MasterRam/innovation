import { Injectable } from '@decorators/di';
import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Response
} from '@decorators/express';
import { PageDocument } from '../../models/documents';
import { Page } from './pageSchema.model';
import { PageRepository } from './page.repository';

@Controller('/api/page')
@Injectable()
export class PageController {
  constructor(private service: PageRepository = new PageRepository()) {}

  @Get('/:id')
  getData(@Response() res, @Params('id') id: string) {
    const page = new Page();
    page.title = id;
    const newContact = new PageDocument(page);
    res.send(newContact);
  }
  @Post('/:id')
  postData(@Response() res, @Params('id') id: string, @Body() data: Page) {
    this.service.Add({ title: id }, data, (success, response) => {
      res.send(response);
    });
  }
}
